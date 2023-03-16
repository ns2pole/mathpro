import { Component } from '@angular/core';
import * as p5 from 'p5';
import { getCanvasWidth, getCanvasHeight, FPS_PER_SECOND} from './calc/Constants';
import { Field } from './calc/Field';
import { ViewManager } from './view/ViewManager';
@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls:['../program.component.css']
})
export class TetrisComponent {
  field : Field = new Field();
  sketch = (p: p5) => {
    p.setup = () => {
      let canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
      let ele : any = document.getElementById('tetris-canvas');
      canvas.parent(ele);
    };
    p.draw = ViewManager.timeElapse(p);
    p.frameRate(FPS_PER_SECOND);
    p.windowResized = () => {
      p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p));
    };
  }
  p : any = null;

  ngOnInit() {
    this.p = new p5(this.sketch);
  }

}
