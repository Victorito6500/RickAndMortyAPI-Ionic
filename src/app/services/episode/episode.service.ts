import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { EpisodeResults } from 'src/app/models/episode-results';
import { Episode } from 'src/app/models/episodes';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  url:string = "https://rickandmortyapi.com/api/episode";

  constructor( private http:HttpClient ) {  }

  // get all the episodes
  getEpisodes():Observable<EpisodeResults>{
    // makes an api call to get all episodes
    return this.http.get<EpisodeResults>(this.url);
  }

  // get a single episode by id
  getEpisode(id:number):Observable<Episode>{
    if(id){
      // makes an api call to get a single character
      return this.http.get<Episode>(`${this.url}/${id}`);
    }
  }

  // get a single episode by url
  getEpisodeByURL(url:string):Observable<Episode>{
    if(url){
      return this.http.get<Episode>(url);
    }
  }
}
