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

  url:string = "https://rickandmortyapi.com/api/character";

  constructor( private http:HttpClient ) { }

  // get all the characters
  getCharacters():Observable<CharacterResults>{
    // makes an api call to get all characters
    return this.http.get<CharacterResults>(this.url);
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

}
