import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

// Models
import { LocationResults } from 'src/app/models/location-results';
import { Location } from 'src/app/models/locations';

// Services
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.page.html',
  styleUrls: ['./location-search.page.scss'],
})
export class LocationSearchPage implements OnInit {

  // Properties
  locationsFiltered:Location[];
  textoBuscado:string;

  constructor( private route:ActivatedRoute,
               private _locationService:LocationService,
               private navCtrl:NavController,
               private router:Router ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.textoBuscado = params['texto'];
      let allLocations:Location[];

      this._locationService.getLocations()
        .subscribe( (locationResults:LocationResults) => {
          allLocations = locationResults.results;

          this.locationsFiltered = this.getLocationsFiltered(params['texto'], allLocations);
        });
      
    })
  }

  // Methods
  // Navigates to the location details page
  locationDetails(id:number){
    this.router.navigate(['/location-details', id]);
  }

  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

  // Find the locations containing the string 
  private getLocationsFiltered(texto:string, locations:Location[]):Location[]{
    texto = texto.toLowerCase();

    let arrTmp:Location[] = [];


    locations.forEach( (location) => {
      let nameLower = location.name.toLowerCase();
      let typeLower = location.type.toLowerCase();

      if(nameLower.indexOf(texto) >= 0 || typeLower.indexOf(texto) >= 0){
        arrTmp.push(location);
      }
    });

    return arrTmp;
  }

}