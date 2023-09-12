import { Component } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { titulo } from '../Interfaces/titulo.interfaces';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
constructor( public dbzService:DbzService){}

}
