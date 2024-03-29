import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './Pages/main-page.component';
import { ListComponent } from './Components/list/list.component';
import { AddCharacterComponent } from './Components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[MainPageComponent]
})


export class DbzModule { }
