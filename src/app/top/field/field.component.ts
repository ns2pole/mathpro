import { Component } from '@angular/core';
import * as p5 from 'p5';
import { Plane } from './Plane';
import { Vertex } from './Vertex';
import { Road } from './Road';

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
      s.background(155);
      s.rectMode(s.CORNER);
      s.rect(Plane.test2(), 100, 100, 100);
      s.rect(Plane.test3(), Vertex.test12(), 100, 100);
      s.rect(Road.test4(), Road.test4(), 100, 100);
      s.rect(100, 100, 100, 100);
      s.rect(100, 100, 100, 100);
      s.rect(100, 100, 100, 100);
    }
  }

  // foo()
  let sketch = (s:any) => {
    s.preload = () => {
      // preload code
    }
    s.setup = () => {
      let canvas = s.createCanvas(s.windowWidth/2, s.windowHeight);
      let ele = document.getElementById('canvas');
      canvas.parent(ele);
    };
    s.windowResized = () => {
      s.resizeCanvas(s.windowWidth/2, s.windowHeight);
    };
    s.draw = drawRect(s);
  }
    new p5(sketch);
  }
}
