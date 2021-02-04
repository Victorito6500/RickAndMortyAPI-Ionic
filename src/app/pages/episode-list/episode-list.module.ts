import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeListPageRoutingModule } from './episode-list-routing.module';

// Pages
import { EpisodeListPage } from './episode-list.page';
import { PagesButtonsComponent } from 'src/app/components/pages-buttons/pages-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeListPageRoutingModule
  ],
  declarations: [
    EpisodeListPage,
    PagesButtonsComponent
  ]
})
export class EpisodeListPageModule {}
