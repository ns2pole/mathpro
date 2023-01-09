import { Edge } from './Edge';
import { Vacant } from './Vacant';
import { Start } from './Start';
import { Goal } from './Goal';
import { Obstacle } from './Obstacle';
import { LABYRINTH_ROW_NUM, LABYRINTH_COLUMN_NUM, OBSTACLE_NUM, CANVAS_BACKGROUND_COLOR, getSquareSize, getXOriginForDrawing, getYOriginForDrawing} from './Const';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Vertex } from './Vertex';
import { Color } from './Union';

export class Plane {
  lab : Labyrinth2D;
  vertexes : Array<Vertex>;
  backGroundColor : Color = CANVAS_BACKGROUND_COLOR
  constructor() {
    this.lab = Labyrinth2D.generateLabyrinth(LABYRINTH_ROW_NUM, LABYRINTH_COLUMN_NUM, OBSTACLE_NUM)
    this.vertexes = []; 
  }

  getVertexIdBy(row: Number, col: Number) : Number {
    return 0;
  }
  static toNumberFor(row : Number, column : Number) : Number {
    return 0;
  }

  
  getAllObstacles() : Array<Obstacle> {
    return [];
  }
  getStart() : Start {
    return new Start(0);
  }
  getAllEdges() : Array<Edge> {
    return [];
  }
  getAllVacants() : Array<Vacant> {
    return [];
  }
  getGoal() : Goal {
    return new Goal(0);
  }

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
            getXOriginForDrawing(s) + i * getSquareSize(s),
            getYOriginForDrawing(s) + j * getSquareSize(s),
            getSquareSize(s),
            getSquareSize(s)
          );
        }
      }
      // this.paint(s)
    }
  }

  paint(s:any): void {
    for (let i = 0; i < this.lab.length; i++) {
      for (let j = 0; j < this.lab[i].length; j++) {
        switch (this.lab[i][j]) {
          case "isObstacle":
            s.fill('black');
            break;
          case "isStart":
            s.fill('green');
            break;
          case "isGoal":
            s.fill('red');
            break;
          case "isVacant":
            s.fill('white');
            break;
        }
      }
    }
  }
}