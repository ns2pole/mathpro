import { Edge } from './Edge';
import { CANVAS_BACKGROUND_COLOR, getXOriginForDrawing, getYOriginForDrawing} from './Const';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Color } from './Union';
import { Square } from './Square';

export class Plane {
  lab : Labyrinth2D;
  ad : AdjacentMatrix;
  backGroundColor : Color = CANVAS_BACKGROUND_COLOR
  constructor() {
    this.lab = Labyrinth2D.generateLabyrinth()
    this.ad = AdjacentMatrix.getAdjacentMatrixFor(this.lab)
  }

  getVertexIdBy(row: Number, col: Number) : Number {
    return 0;
  }
  static toNumberFor(row : Number, column : Number) : Number {
    return 0;
  }

  
  // getAllObstacles() : Array<Obstacle> {
  //   return [];
  // }
  // getStart() : Start {
  //   return new Start(0);
  // }
  getAllEdges() : Array<Edge> {
    return [];
  }
  // getAllVacants() : Array<Vacant> {
  //   return [];
  // }
  // getGoal() : Goal {
  //   return new Goal(0);
  // }

  getSquareStartPosition() : [Number, Number] {
    return [0, 0];
  }

  draw(s:any): () => void {
    return () => {
      s.background(this.backGroundColor);
      s.rectMode(s.CORNER);
      for (let i = 0; i < this.lab.length; i++) {
        for (let j = 0; j < this.lab[i].length; j++) {
          s.rect(
            getXOriginForDrawing(s) + i * Square.getSize(s),
            getYOriginForDrawing(s) + j * Square.getSize(s),
            Square.getSize(s),
            Square.getSize(s),
          );
        }
      }
      this.paint(s)
    }
  }

  paint(s:any): void {
    for (let i = 0; i < this.lab.length; i++) {
      for (let j = 0; j < this.lab[i].length; j++) {
        switch (this.lab[i][j].kind) {
          case "isObstacle":
            s.fill('black');
            s.rect(40, 40,  50, 50);
            break;
          case "isStart":
            s.fill('green');
            s.rect(140, 100,  50, 50);
            break;
          case "isGoal":
            s.fill('red');
            s.rect(440, 400,  50, 50);
            break;
          case "isVacant":
            s.fill('white');
            s.rect(540 + 10, 500,  50, 50);
            break;
        }
      }
    }
  }
}