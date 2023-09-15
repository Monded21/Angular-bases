import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../Interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 50000,
    },
    {
      id: uuid(),
      name: 'Edmond',
      power: 10000000,
    },
  ];

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  //onDeleteCharacter(index: number) {
   // this.characters.splice(index, 1);
  deleteCharacterBy(id:string){
this.characters=this.characters.filter(character=> character.id !==id);
  }
}
