import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { LocationResults } from 'src/app/models/location-results';
import { Location } from 'src/app/models/locations';

// Services
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.page.html',
  styleUrls: ['./location-list.page.scss'],
})
export class LocationListPage implements OnInit {

  // Properties
  locationResults:LocationResults;
  locationList:Location[];

  constructor( private _locationService:LocationService,
               private router:Router ) { 

    this._locationService.getLocations()
      .subscribe( (result:LocationResults) =>{
        this.locationResults = result;
        this.locationList = this.locationResults.results;
      });
  }

  ngOnInit() {
  }

  // Methods
  // Navigates to the details of the location selected
  locationDetails(id:number){
    this.router.navigate(['/location-details', id]);
  }

  // Search locations containing the string
  searchLocation(texto:string){
    this.router.navigate(['/location-search', texto]);
  }
}
