import { Component } from '@angular/core';
import * as p5 from 'p5';
import { Plane } from './Plane';
import { Vertex } from './Vertex';
import { Road } from './Road';

@Component({
  selector: 'app-breadth-first-search',
  templateUrl: './breadth-first-search.component.html',
  styleUrls: ['./breadth-first-search.component.css']
})
export class BreadthFirstSearchComponent {
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