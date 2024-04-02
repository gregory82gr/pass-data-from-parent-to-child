import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrl: './parent-input.component.css'
})
export class ParentInputComponent {
  title = 'Component Interaction';
  Counter = 5;

  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }
}
