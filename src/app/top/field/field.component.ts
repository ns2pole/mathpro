import { Component } from '@angular/core';
import {state, style} from '@angular/animations';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  animations: [
    state(
      'blue',
      style({
      background: 'blue',
      })
    ),
    state(
      'red',
      style({
      background: 'red',
      })
    ),
  ],
})

export class FieldComponent {
  isBlue = true;
  changeColor() {
    this.isBlue = !this.isBlue;
  }
}
