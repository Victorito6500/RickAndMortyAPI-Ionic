import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { LocationResults } from 'src/app/models/location-results';
import { Location } from 'src/app/models/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url:string = "https://rickandmortyapi.com/api/location";

  constructor( private http:HttpClient ) { }

  // get all locations
  getLocations():Observable<LocationResults>{
    // makes an api call to get all locations
    return this.http.get<LocationResults>(this.url);
  }

  // get a single location by id
  getLocation(id:number):Observable<Location>{
    if(id){
      // makes an api call to get a single location
      return this.http.get<Location>(`${this.url}/${id}`);
    }
  }

  // get a single location by url
  getLocationByURL(url:string):Observable<Location>{
    if(url){
      return this.http.get<Location>(url);
    }
  }
}