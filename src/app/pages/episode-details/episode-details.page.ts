import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

// Models
import { Episode } from 'src/app/models/episodes';

// Services
import { EpisodeService } from 'src/app/services/episode/episode.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  // Properties
  episode:Episode;

  // Observables
  episode$:Observable<Episode>;

  constructor( private route:ActivatedRoute,
               private _episodeService:EpisodeService,
               private navCtrl:NavController ) { }

  ngOnInit() {

    this.route.params.subscribe( (params) => {
      this.episode$ = this._episodeService.getEpisode(params['id']);
    });

  }

  // Methods
  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }
}