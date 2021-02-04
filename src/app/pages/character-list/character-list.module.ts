import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterListPageRoutingModule } from './character-list-routing.module';

// Pages
import { CharacterListPage } from './character-list.page';

// Components
import { CharacterCardListComponent } from 'src/app/components/character-card-list/character-card-list.component';
import { PagesButtonsComponent } from 'src/app/components/pages-buttons/pages-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterListPageRoutingModule
  ],
  declarations: [
    CharacterListPage,
    CharacterCardListComponent,
    PagesButtonsComponent
  ]
})
export class CharacterListPageModule {}
