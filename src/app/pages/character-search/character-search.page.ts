import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

// Models
import { CharacterResults } from 'src/app/models/character-results';
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
  charactersFiltered:Character[];
  textoBuscado:string;

  constructor( private route:ActivatedRoute,
               private _characterService:CharacterService,
               private navCtrl:NavController,
               private router:Router ) { }

  ngOnInit() {

    this.route.params.subscribe( (params) => {
      this.textoBuscado = params['texto'];
      let allCharacters:Character[];

      this._characterService.getCharacters().subscribe( (characterResult:CharacterResults) => {
        allCharacters = characterResult.results;

        this.charactersFiltered = this.getCharacterFiltered(params['texto'], allCharacters);
      });
      
    })
  }

  // Methods
  // Navigates to the character details page
  characterDetails(id:number){
    this.router.navigate(['/character-details', id]);
  }

  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

  // Find the characters containing the string 
  private getCharacterFiltered(texto:string, characters:Character[]):Character[]{
    texto = texto.toLowerCase();
    let arrTmp:Character[] = [];

    characters.forEach( (character) => {
      let nameLower = character.name.toLowerCase();
      let specie = character.species.toLowerCase();
      if(nameLower.indexOf(texto) >= 0 || specie.indexOf(texto) >= 0){
        arrTmp.push(character);
      }
    });

    return arrTmp;
  }

}
