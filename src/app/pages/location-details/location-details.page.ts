import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

// Models
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

  // Observables
  location$:Observable<Location>;

  constructor( private route:ActivatedRoute,
               private _locationService:LocationService,
               private navCtrl:NavController ) { }

  ngOnInit() {

    this.route.params.subscribe( (params) => {
      this.location$ = this._locationService.getLocation(params['id']);
    });

  }

  // Methods
  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

}
