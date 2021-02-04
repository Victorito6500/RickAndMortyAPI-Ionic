import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPageRoutingModule } from './location-details-routing.module';

// Pages
import { LocationDetailsPage } from './location-details.page';

// Components
import { LocationCardDetailComponent } from 'src/app/components/location-card-detail/location-card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationDetailsPageRoutingModule
  ],
  declarations: [
    LocationDetailsPage,
    LocationCardDetailComponent
  ]
})
export class LocationDetailsPageModule {}
