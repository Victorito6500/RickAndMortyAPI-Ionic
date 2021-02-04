import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Character } from 'src/app/models/characters';

@Component({
  selector: 'app-character-card-list',
  templateUrl: './character-card-list.component.html',
  styleUrls: ['./character-card-list.component.scss'],
})
export class CharacterCardListComponent implements OnInit {

  // Input parameters
  @Input() character:Character; 

  constructor( private router:Router ) { }

  ngOnInit() {}

  // Methods
  // Navigates to the details of the episode selected
  characterDetails(id:number){
    this.router.navigate(['/character-details', id]);
  }

}
