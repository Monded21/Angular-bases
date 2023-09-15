import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';
import { titulo } from '../../Interfaces/titulo.interfaces';
import { first } from 'rxjs';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {


  @Input()
public characterlist:Character[]=[{
name:'Trunk',power:10

}];

// onDeleteId=Index value: number

@Output()onDelete:EventEmitter<string>= new EventEmitter();


//ejecuta la emision
onDeleteCharacter(id?:string):void{
if (!id)return;
console.log(first)
this.onDelete.emit(id);

}


}
