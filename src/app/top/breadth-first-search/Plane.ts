import { Edge } from './Edge';
import { CANVAS_BACKGROUND_COLOR, getXOriginForDrawing, getYOriginForDrawing} from './Const';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Color } from './Union';

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
      this.lab.draw(s)
      this.lab.drawSolution(s)
    }
  }

}
