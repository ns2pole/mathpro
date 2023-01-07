import { Edge } from './Edge';
import { Vacant } from './Vacant';
import { Start } from './Start';
import { Goal } from './Goal';
import { Obstacle } from './Obstacle';
import { Space, IsAdjacent } from './Union';
import { LABYRINTH_ROW_NUM, LABYRINTH_COLUMN_NUM, OBSTACLE_NUM, CANVAS_BACKGROUND_COLOR, getSquareSize, getXOriginForDrawing, getYOriginForDrawing} from './Const';
import { isInside } from './FunctionModule';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';

export class Plane {
  map : Labyrinth2D;
  adjacentMatrix : AdjacentMatrix;
  constructor() {
    this.map = Labyrinth2D.generateLabyrinth(LABYRINTH_ROW_NUM, LABYRINTH_COLUMN_NUM, OBSTACLE_NUM); 
    this.adjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(this.map);
  }




  // static setIsAdjacent(map,[a, b], [c, d], yesOrNo) 

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
      s.background(CANVAS_BACKGROUND_COLOR);
      s.rectMode(s.CORNER);
      for (let i = 0; i < LABYRINTH_ROW_NUM; i++) {
        for (let j = 0; j < LABYRINTH_COLUMN_NUM; j++) {
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
    for (let i = 0; i < LABYRINTH_ROW_NUM; i++) {
      for (let j = 0; j < LABYRINTH_COLUMN_NUM; j++) {
        switch (this.map[i][j]) {
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