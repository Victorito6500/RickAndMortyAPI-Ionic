import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterSearchPageRoutingModule } from './character-search-routing.module';

import { CharacterSearchPage } from './character-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterSearchPageRoutingModule
  ],
  declarations: [CharacterSearchPage]
})
export class CharacterSearchPageModule {}
