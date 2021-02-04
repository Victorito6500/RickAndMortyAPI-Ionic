import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

// Models
import { Character } from 'src/app/models/characters';
import { Location } from 'src/app/models/locations';

// Services
import { CharacterService } from 'src/app/services/character/character.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  // Properties
  location:Location;
  residents:Character[];

  constructor( private route:ActivatedRoute,
               private _characterService:CharacterService,
               private _locationService:LocationService,
               private router:Router,
               private navCtrl:NavController ) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe( (params) => {

      this._locationService.getLocation(params['id'])
        .subscribe( (location:Location) =>{
          this.location = location;

          this.residents = [];

          this.location.residents.forEach( (residentURL) => {
            this.getResident(residentURL);
          });
        });

    });
  }

  // Methods
  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

  // Navigates to the character details page
  residentDetails(id:number){
    this.router.navigate(['character-details', id]);
  }

  // Add a character to resident list
  private getResident(url:string){
    this._characterService.getCharacterByURL(url)
      .subscribe( (character:Character) => {
        this.residents.push(character);
      });
  }
}
