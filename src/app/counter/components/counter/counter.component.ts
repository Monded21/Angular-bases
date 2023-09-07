import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
<h3>Counter: {{COUNTER}}</h3>

<button (click)="increaseby(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseby(-1)">-1</button>

  `

})

export class counterComponent  {
  constructor() { }
  COUNTER: number = 10;

  increaseby(value: number): void {
    this.COUNTER += value;
  }


  reset(): void {
    this.COUNTER =10;
  }

}
