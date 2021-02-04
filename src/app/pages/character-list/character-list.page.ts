import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { CharacterResults } from 'src/app/models/character-results';
import { Character } from 'src/app/models/characters';

// Services
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {

  // Properties
  characterResults:CharacterResults;
  characterList:Character[];
  page:number = 1;

  constructor( private _characterService:CharacterService,
               private router:Router ) { }

  ngOnInit() {

    this.getCharacterResults(this.page);

  }

  // Methods
  // Search characters containing the string
  searchCharacter(texto:string){
    if(texto.length > 0){
      this.router.navigate(['/character-search', texto]);
    }
  }

  // Get the characters of the next or prev page
  pageMove(page:number){
    this.getCharacterResults(page);
  }

  // Suscribe to the observable and get de character results
  private getCharacterResults(page:number){
    this._characterService.getCharacters(page)
      .subscribe( (result:CharacterResults) => {
        this.characterResults = result;
        this.characterList = this.characterResults.results;  
    });
  }

}