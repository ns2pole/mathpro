import { IsAdjacent } from './IsAdjacent';
import { Edge } from './Edge';
import { Vacant } from './Vacant';
import { Start } from './Start';
import { Goal } from './Goal';
import { Obstacle } from './Obstacle';
import { Space } from './Space';
import { Const } from './Const';

export class Plane {
  map : Array<Array<Space>>;
  adjacentMatrix : Array<Array<IsAdjacent>>;
  constructor() {
    this.map = this.generateMap(); 
    this.adjacentMatrix = this.getAdjacentMatrix();
  }
  generateMap() : Array<Array<Space>>{
  // [this.map](http://this.map)[i][j] = Space.isRoad
  // for( i < obstacleNum)
  // [this.map](http://this.map)[getRandomRow()][getRandomColumn()] = Space.isObstacle
  // this.map[getRandomRow()][getRandomColumn()] = Space.isStart
  // this.map[getRandomRow()][getRandomColumn()] = Space.isGoal
    return [];
  }
  
  //隣接行列
  getAdjacentMatrix() : Array<Array<IsAdjacent>> {
    // if(this.map[i][j] == isRoad && ) {
    // }
    return [];
  }
  
  getVertexIdBy(row: Number, col: Number) : Number {
    return 0;
  }
  static toRowColumnFor(num : Number) : [Number, Number] {
    return [0, 0];
  }
  static toNumberFor(row : Number, column : Number) : Number {
    return 0;
  }
  getRandomRow() : Number {
    return 0;
  }
  getRandomColumn() : Number {
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
      s.background(Const.CANVAS_BACKGROUND_COLOR);
      s.rectMode(s.CORNER);
      for (let i = 0; i < Const.SQUARE_ROW_NUM; i++) {
        for (let j = 0; j < Const.SQUARE_COLUMN_NUM; j++) {
          s.rect(
            Const.getXOriginForDrawing(s) + i * Const.getSquareSize(s),
            Const.getYOriginForDrawing(s) + j * Const.getSquareSize(s),
            Const.getSquareSize(s),
            Const.getSquareSize(s)
          );
        }
      }
    }
  }
}