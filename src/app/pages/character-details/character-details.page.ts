import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

// Models
import { Character } from 'src/app/models/characters';

// Services
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  // Properties
  character:Character;

  character$:Observable<Character>; // observable para pipe async

  constructor( private route:ActivatedRoute,
               private _characterService:CharacterService,
               private navCtrl:NavController) { }

  ngOnInit() {

    this.route.params.subscribe( (params) => {
      // Se suscribe al observable
      // this._characterService.getCharacter(params['id'])
      //   .subscribe( (character:Character) =>{
      //     this.character = character;
      // });

      // Asignamos el observable a la variable
      this.character$ = this._characterService.getCharacter(params['id']);
    });

  }

  // Methods
  // Return back to the last page
  volver(){
    this.navCtrl.back();
  }

}
