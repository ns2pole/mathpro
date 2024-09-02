import { Component } from '@angular/core';
import * as p5 from 'p5';
import { getCanvasWidth, getCanvasHeight, FPS_PER_SECOND} from './calc/Constants';
import { ViewManager } from './ViewManager';
@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls:['../program.component.css']
})
export class TetrisComponent {
  sketch = (p: p5) => {
    p.setup = () => {
      let canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
      let ele : any = document.getElementById('tetris-container');
      canvas.parent(ele);
      // キャンバスを中央に配置するためにCSSを直接設定
      canvas.style('display', 'block');
      canvas.style('margin', '0 auto');
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

  moveRight() {
    if (ViewManager.controllingFourPiece.canMoveRight(ViewManager.map)) {
      ViewManager.controllingFourPiece = ViewManager.controllingFourPiece.getFourPieceMovedRight();
    }
  }

  moveLeft() {
    if (ViewManager.controllingFourPiece.canMoveLeft(ViewManager.map)) {
      ViewManager.controllingFourPiece = ViewManager.controllingFourPiece.getFourPieceMovedLeft();
    }
  }

  moveDown() {
    if (ViewManager.controllingFourPiece.canMoveDown(ViewManager.map)) {
      ViewManager.controllingFourPiece = ViewManager.controllingFourPiece.getFourPieceMovedDown();
    }
  }

  rotateAntiClockWise() {
    if (ViewManager.controllingFourPiece.canRotateAntiClockWise(ViewManager.map)) {
      ViewManager.controllingFourPiece = ViewManager.controllingFourPiece.getFourPieceAntiClockWiselyRotated();
    }
  }


}
