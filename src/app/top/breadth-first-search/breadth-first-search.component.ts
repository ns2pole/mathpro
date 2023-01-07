import { Component } from '@angular/core';
import * as p5 from 'p5';
import { getCanvasWidth, getCanvasHeight } from './Const';
import { Plane } from './Plane';

@Component({
  selector: 'app-breadth-first-search',
  templateUrl: './breadth-first-search.component.html',
  styleUrls: ['./breadth-first-search.component.css']
})
export class BreadthFirstSearchComponent {
  ngOnInit() {
    const plane : Plane = new Plane();
    let sketch = (s:any) => {
      s.setup = () => {
        let canvas = s.createCanvas(getCanvasWidth(s), getCanvasHeight(s));
        let ele = document.getElementById('canvas');
        canvas.parent(ele);
        s.draw = plane.draw(s);

      };
      s.windowResized = () => {
        s.resizeCanvas(getCanvasWidth(s), getCanvasHeight(s));
      };
    }
    new p5(sketch);
  }
}