import { Component } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})

export class FieldComponent {

  ngOnInit() {
    const a: number = 1;
    const b: number = 2;
    // function foo(): void {
    //   console.log('hello');
    // }

    function drawRect(s:any): () => void {
      return () => {
        s.background(255);
        s.rect(100, 100, 100, 100);
        s.rect(200, 200, 100, 100);
      }
    }

    // foo()
    let sketch = (s:any) => {
      s.preload = () => {
        // preload code
      }
      s.setup = () => {
        let canvas = s.createCanvas(400, 400);
        let ele = document.getElementsByTagName('app-field')[0];
        canvas.parent(ele);
      };
      s.draw = drawRect(s);
    }
    new p5(sketch);
  }
}
