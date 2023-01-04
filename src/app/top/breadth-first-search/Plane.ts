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
    let map : Array<Array<Space>> = new Array(Const.SQUARE_ROW_NUM);
    for( let i :number = 0; i < Const.SQUARE_ROW_NUM; i++) {
      map[i] = new Array(Const.SQUARE_COLUMN_NUM);
      for( let j :number = 0; j < Const.SQUARE_COLUMN_NUM; j++) {
        map[i][j] = Space.isVacant;
      }
    }
    map[Plane.getRandomRow()][Plane.getRandomColumn()] = Space.isStart
    map[Plane.getRandomRow()][Plane.getRandomColumn()] = Space.isGoal
    return map;
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

  static getRandomRow() : number {
    return Math.floor(Math.random() * Const.SQUARE_ROW_NUM);
  }
  
  static getRandomColumn() : number {
    return Math.floor(Math.random() * Const.SQUARE_COLUMN_NUM);
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
      // this.paint(s)
    }
  }

  paint(s:any): void {
    for (let i = 0; i < Const.SQUARE_ROW_NUM; i++) {
      for (let j = 0; j < Const.SQUARE_COLUMN_NUM; j++) {
        switch (this.map[i][j]) {
          case Space.isObstacle:
            s.fill('black');
            break;
          case Space.isStart:
            s.fill('green');
            break;
          case Space.isGoal:
            s.fill('red');
            break;
          case Space.isVacant:
            s.fill('white');
            break;
        }
      }
    }
  }
}