import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterSearchPageRoutingModule } from './character-search-routing.module';

// Pages
import { CharacterSearchPage } from './character-search.page';

// Components
import { CharacterCardListComponent } from 'src/app/components/character-card-list/character-card-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterSearchPageRoutingModule
  ],
  declarations: [
    CharacterSearchPage,
    CharacterCardListComponent
  ]
})
export class CharacterSearchPageModule {}
