import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { CharacterResults } from 'src/app/models/character-results';
import { Character } from 'src/app/models/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  allCharacters:Character[] = [];
  allCharactersFiltered:Character[] = [];
  loaded:boolean = false;
  url:string = `https://rickandmortyapi.com/api/character`;

  constructor( private http:HttpClient ) { 
    this.loadCharacters();
  }

  // get all the characters of a page
  getCharacters(page:number):Observable<CharacterResults>{
    // makes an api call to get all characters
    return this.http.get<CharacterResults>(`${this.url}/?page=${page}`);
  }

  // get a single character by id
  getCharacter(id:number):Observable<Character>{
    if(id){
      // makes an api call to get a single character
      return this.http.get<Character>(`${this.url}/${id}`);
    }
  }

  // get a single character by url
  getCharacterByURL(url:string):Observable<Character>{
    if(url){
      return this.http.get<Character>(url);
    }
  }

  // Search all the characters containing the string
  searchCharacters(texto:string){
    if(this.allCharacters.length === 0){
      this.loadCharacters().then( () => {
        this.filterCharacters(texto);
      })
    }else{
      this.filterCharacters(texto);
    }
  }

  // Load all the characters from all pages
  private loadCharacters(){
    return new Promise( (resolve, reject) => {
      this.http.get<CharacterResults>(this.url).subscribe( (result:CharacterResults) => {
        let numPages = result.info.pages;

        for(let i = 1; i <= numPages; i++){
          this.getCharacters(i).subscribe( (characterResult:CharacterResults) => {
            let pageCharacters = characterResult.results;

            pageCharacters.forEach( (character) =>{
              this.allCharacters.push(character);
            });
          });
        }

        this.loaded = true;
      })
    });
  }

  // Find the characters containing the string 
  private filterCharacters(texto:string){
    this.allCharactersFiltered = [];
    texto = texto.toLowerCase();

    this.allCharacters.forEach( (character) => {
      let nameLower = character.name.toLowerCase();
      let specie = character.species.toLowerCase();

      if(nameLower.indexOf(texto) >= 0 || specie.indexOf(texto) >= 0){
        this.allCharactersFiltered.push(character);
      }
    });

  }

}
