import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationListPageRoutingModule } from './location-list-routing.module';

// Pages
import { LocationListPage } from './location-list.page';
import { PagesButtonsComponent } from 'src/app/components/pages-buttons/pages-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationListPageRoutingModule
  ],
  declarations: [
    LocationListPage,
    PagesButtonsComponent
  ]
})
export class LocationListPageModule {}
