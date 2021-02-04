import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { EpisodeResults } from 'src/app/models/episode-results';
import { Episode } from 'src/app/models/episodes';

// Services
import { CharacterService } from 'src/app/services/character/character.service';
import { EpisodeService } from 'src/app/services/episode/episode.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.page.html',
  styleUrls: ['./episode-list.page.scss'],
})
export class EpisodeListPage implements OnInit {

  // Properties
  episodeResults:EpisodeResults;
  episodeList:Episode[];

  constructor( private _characterService:CharacterService,
               private _episodeService:EpisodeService,
               private router:Router ) { 

    this._episodeService.getEpisodes()
      .subscribe( (result:EpisodeResults) =>{
        this.episodeResults = result;
        this.episodeList = this.episodeResults.results;
      });
  }

  ngOnInit() {
  }

  // Methods
  // Navigates to the details of the episode selected
  episodeDetails(id:number){
    this.router.navigate(['/episode-details', id]);
  }

  // Search episodes containing the string
  searchEpisode(texto:string){
    this.router.navigate(['/episode-search', texto]);
  }
}
