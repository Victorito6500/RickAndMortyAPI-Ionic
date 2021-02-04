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

  constructor( private _characterService:CharacterService,
               private router:Router ) {

    this._characterService.getCharacters()
      .subscribe( (result:CharacterResults) => {
        this.characterResults = result;
        this.characterList = this.characterResults.results;  
    });

  }

  ngOnInit() {
  }

  // Methods
  // Navigates to the details of the episode selected
  characterDetails(id:number){
    this.router.navigate(['/character-details', id]);
  }

  // Search characters containing the string
  searchCharacter(texto:string){
    this.router.navigate(['/character-search', texto]);
  }

}