import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailsPageRoutingModule } from './character-details-routing.module';

// Pages
import { CharacterDetailsPage } from './character-details.page';

// Components
import { CharacterCardDetailComponent } from 'src/app/components/character-card-detail/character-card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailsPageRoutingModule
  ],
  declarations: [
    CharacterDetailsPage,
    CharacterCardDetailComponent
  ]
})
export class CharacterDetailsPageModule {}
