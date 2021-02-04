import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

// Models
import { Character } from 'src/app/models/characters';
import { Episode } from 'src/app/models/episodes';
import { Location } from 'src/app/models/locations';

// Services
import { CharacterService } from 'src/app/services/character/character.service';
import { EpisodeService } from 'src/app/services/episode/episode.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  // Properties
  character:Character;
  firstEpisode:Episode;
  origin:Location;
  lastKnownLocation:Location;

  constructor( private route:ActivatedRoute,
               private _characterService:CharacterService,
               private _episodeService:EpisodeService,
               private _locationService:LocationService,
               private navCtrl:NavController) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this._characterService.getCharacter(params['id'])
        .subscribe( (character:Character) =>{
          
          this.character = character;

          if(this.character.origin.url.length > 0){
            this._locationService.getLocationByURL(this.character.origin.url)
              .subscribe( (location:Location) => {
                this.origin = location;
              })
          }else{
            this.origin = null;
          }

          if(this.character.location.url.length > 0){
            this._locationService.getLocationByURL(this.character.location.url)
              .subscribe( (location:Location) => {
                this.lastKnownLocation = location;
              })
          }else{
            this.lastKnownLocation = null;
          }

          this._episodeService.getEpisodeByURL(this.character.episode[0])
            .subscribe( (episode:Episode) => {
            this.firstEpisode = episode;
          });

      });
    });
  }

  // Methods
  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

}
