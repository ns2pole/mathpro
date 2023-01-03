import { Component } from '@angular/core';
import * as p5 from 'p5';
import { Canvas } from './Canvas';
import { Plane } from './Plane';

@Component({
  selector: 'app-breadth-first-search',
  templateUrl: './breadth-first-search.component.html',
  styleUrls: ['./breadth-first-search.component.css']
})
export class BreadthFirstSearchComponent {
  ngOnInit() {
    const plane : Plane = new Plane(10, 10, 10);
    let sketch = (s:any) => {
      s.preload = () => {
      }
      s.setup = () => {
        let canvas = s.createCanvas(Canvas.getWidth(s), Canvas.getHeight(s));
        let ele = document.getElementById('canvas');
        canvas.parent(ele);
      };
      s.windowResized = () => {
        s.resizeCanvas(Canvas.getWidth(s), Canvas.getHeight(s));
      };
      s.draw = plane.draw(s);
    }
    new p5(sketch);
  }
}