import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';
import { titulo } from '../../Interfaces/titulo.interfaces';


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

@Output()onDelete:EventEmitter<number>= new EventEmitter();


//ejecuta la emision 
onDeleteCharacter(index:number):void{

this.onDelete.emit(index);

}




}
