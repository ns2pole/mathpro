import { Component } from '@angular/core';
import * as p5 from 'p5';
import { Const } from './Const';
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
      s.preload = () => {
      }
      s.setup = () => {
        let canvas = s.createCanvas(Const.getCanvasWidth(s), Const.getCanvasHeight(s));
        let ele = document.getElementById('canvas');
        canvas.parent(ele);
      };
      s.windowResized = () => {
        s.resizeCanvas(Const.getCanvasWidth(s), Const.getCanvasHeight(s));
      };
      s.draw = plane.draw(s);
    }
    new p5(sketch);
  }
}