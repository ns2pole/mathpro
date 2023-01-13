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
    let sketch = (p: p5) => {
      p.setup = () => {
        let canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
        let ele : any = document.getElementById('canvas');
        canvas.parent(ele);
        p.draw = plane.draw(p);
        p.noLoop();
      };
      p.windowResized = () => {
        p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p));
      };
    }
    new p5(sketch);
  }
}
