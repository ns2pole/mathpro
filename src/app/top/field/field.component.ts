import { Component } from '@angular/core';
import {state, style, transition, animate, trigger} from '@angular/animations';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  animations: [
    trigger('changeColor', [
      state(
        'white',
        style({
        background: 'white',
        })
      ),
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
      transition('white => blue', [animate('1s')]),
      transition('blue => white', [animate('1s')]),
    ])
  ]
})

export class FieldComponent {
  isWhite = true;
  changeColor() {
    this.isWhite = !this.isWhite;
  }
}
