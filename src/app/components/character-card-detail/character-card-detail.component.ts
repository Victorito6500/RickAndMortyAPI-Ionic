import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-character-card-detail',
  templateUrl: './character-card-detail.component.html',
  styleUrls: ['./character-card-detail.component.scss'],
})
export class CharacterCardDetailComponent implements OnInit {

  @Input() character:Character;

  firstEpisode:Episode;
  origin:Location;
  lastKnownLocation:Location;

  constructor( private route:ActivatedRoute,
               private _characterService:CharacterService,
               private _episodeService:EpisodeService,
               private _locationService:LocationService,
               private navCtrl:NavController) { }

  ngOnInit() {

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

  }

}
