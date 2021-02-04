import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

// Models
import { Character } from 'src/app/models/characters';
import { Episode } from 'src/app/models/episodes';

// Services
import { CharacterService } from 'src/app/services/character/character.service';
import { EpisodeService } from 'src/app/services/episode/episode.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  // Properties
  episode:Episode;
  characters:Character[];

  constructor( private route:ActivatedRoute,
               private _characterService:CharacterService,
               private _episodeService:EpisodeService,
               private router:Router,
               private navCtrl:NavController ) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe( (params) => {

      this._episodeService.getEpisode(params['id'])
        .subscribe( (episode:Episode) =>{
          this.episode = episode;

          this.characters = [];

          this.episode.characters.forEach( (characterURL) => {
            this.getCharacter(characterURL);
          });
        });

    });
  }

  // Methdos
  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

  // Navigates to the character selected detail page
  characterDetails(id:number){
    this.router.navigate(['character-details', id]);
  }

  // Add a character to resident list
  private getCharacter(url:string){
    this._characterService.getCharacterByURL(url)
      .subscribe( (character:Character) => {
        this.characters.push(character);
      });
  }

}