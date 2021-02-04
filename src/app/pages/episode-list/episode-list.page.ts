import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { EpisodeResults } from 'src/app/models/episode-results';
import { Episode } from 'src/app/models/episodes';

// Services
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
  page:number = 1;

  constructor( private _episodeService:EpisodeService,
               private router:Router ) { }

  ngOnInit() {

    this.getEpisodeResults(this.page);

  }

  // Methods
  // Navigates to the details of the episode selected
  episodeDetails(id:number){
    this.router.navigate(['/episode-details', id]);
  }

  // Search episodes containing the string
  searchEpisode(texto:string){
    if(texto.length > 0){
      this.router.navigate(['/episode-search', texto]);
    }
  }

  // Get the characters of the next or prev page
  pageMove(page:number){
    this.getEpisodeResults(page);
  }

  // Suscribe to the observable and get de episode results
  private getEpisodeResults(page:number){
    this._episodeService.getEpisodes(page)
      .subscribe( (result:EpisodeResults) =>{
        this.episodeResults = result;
        this.episodeList = this.episodeResults.results;
      });
  }
}
