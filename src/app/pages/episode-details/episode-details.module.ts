import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeDetailsPageRoutingModule } from './episode-details-routing.module';

// Pages
import { EpisodeDetailsPage } from './episode-details.page';

// Components
import { EpisodeCardDetailComponent } from 'src/app/components/episode-card-detail/episode-card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeDetailsPageRoutingModule
  ],
  declarations: [
    EpisodeDetailsPage,
    EpisodeCardDetailComponent
  ]
})
export class EpisodeDetailsPageModule {}
