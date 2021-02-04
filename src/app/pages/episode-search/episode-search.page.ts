import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

// Models
import { EpisodeResults } from 'src/app/models/episode-results';
import { Episode } from 'src/app/models/episodes';

// Services
import { EpisodeService } from 'src/app/services/episode/episode.service';

@Component({
  selector: 'app-episode-search',
  templateUrl: './episode-search.page.html',
  styleUrls: ['./episode-search.page.scss'],
})
export class EpisodeSearchPage implements OnInit {

  // Properties
  episodesFiltered:Episode[];
  textoBuscado:string;

  constructor( private route:ActivatedRoute,
               private _episodeService:EpisodeService,
               private navCtrl:NavController,
               private router:Router ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.textoBuscado = params['texto'];
      let allEpisodes:Episode[];

      this._episodeService.getEpisodes().subscribe( (episodeResults:EpisodeResults) => {
        allEpisodes = episodeResults.results;

        this.episodesFiltered = this.getEpisodesFiltered(params['texto'], allEpisodes);
      });
      
    })
  }

  // Methods
  // Navigates to the episode details page
  episodeDetails(id:number){
    this.router.navigate(['/episode-details', id]);
  }

  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

  // Find the episodes containing the string 
  private getEpisodesFiltered(texto:string, episodes:Episode[]):Episode[]{
    texto = texto.toLowerCase();

    let arrTmp:Episode[] = [];


    episodes.forEach( (episode) => {
      let nameLower = episode.name.toLowerCase();

      let numEp = episode.episode.toLowerCase();
      if(nameLower.indexOf(texto) >= 0 || numEp.indexOf(texto) >= 0){
        arrTmp.push(episode);
      }
    });

    return arrTmp;
  }

}

