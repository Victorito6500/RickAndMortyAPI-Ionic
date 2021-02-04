import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

// Models
import { Character } from 'src/app/models/characters';

// Services
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.page.html',
  styleUrls: ['./character-search.page.scss'],
})
export class CharacterSearchPage implements OnInit {

  // Properties
  charactersFiltered:Character[] = [];
  textoBuscado:string;

  constructor( private route:ActivatedRoute,
               private _characterService:CharacterService,
               private navCtrl:NavController ) { }

  ngOnInit() {
    
    this.route.params.subscribe( (params) => {
      this.textoBuscado = params['texto'];

      this._characterService.searchCharacters(this.textoBuscado);

      this.charactersFiltered = this._characterService.allCharactersFiltered;
      
      if(this.charactersFiltered.length == 0){
        this.navCtrl.back();
      }
      
    })
    
  }

  // Methods
  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

}
