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
    this.map = Plane.generateMap(); 
    this.adjacentMatrix = Plane.getAdjacentMatrix(this.map);
  }
  static generateMap() : Array<Array<Space>>{
    let map : Array<Array<Space>> = new Array(Const.SQUARE_ROW_NUM);
    for( let i :number = 0; i < Const.SQUARE_ROW_NUM; i++) {
      map[i] = new Array(Const.SQUARE_COLUMN_NUM);
      for( let j :number = 0; j < Const.SQUARE_COLUMN_NUM; j++) {
        map[i][j] = Space.isVacant;
      }
    }
    for( let i :number = 0; i < Const.OBSTACLE_NUM; i++) {
        map[Plane.getRandomRow()][Plane.getRandomColumn()] = Space.isObstacle;
    }
    map[Plane.getRandomRow()][Plane.getRandomColumn()] = Space.isStart
    map[Plane.getRandomRow()][Plane.getRandomColumn()] = Space.isGoal
    return map;
  }
  
  //Obstacle以外の場所のV、row,columnに対応するVertexのidを取得する
  static getCountOfObstaclesUntil(map : Array<Array<Space>>, row : number, column :number) : number {
    let obstaclesNum : number = 0;
    for( let i :number = 0; i < Const.SQUARE_ROW_NUM; i++) {
      for( let j :number = 0; j < Const.SQUARE_COLUMN_NUM; j++) {
        if(map[i][j] == Space.isObstacle) {
          obstaclesNum++;
        }
        if(i == row && j == column) {
          return obstaclesNum;
        }
      }
    }
    //TODO:error処理
    return 0;
  }

  static getVertexIdsFor(map : Array<Array<Space>>, row : number, column :number) : number {
    return row * Const.SQUARE_COLUMN_NUM + column - Plane.getCountOfObstaclesUntil(map, row, column);
  }

  //Vertexのidから、Mapのrowとcolumnを取得する
  static toRowColumnFor(map : Array<Array<Space>>, id : number) : [Number, Number] {
    let rowIfNoObstacle : number = Math.floor(id / Const.SQUARE_COLUMN_NUM);
    let columnIfNoObstacle : number = id % Const.SQUARE_COLUMN_NUM;
    let obstaclesNum : number = Plane.getCountOfObstaclesUntil(map, rowIfNoObstacle, columnIfNoObstacle);
    let idWithoutObstacles : number = id + obstaclesNum;
    let resultRow = Math.floor(idWithoutObstacles / Const.SQUARE_COLUMN_NUM);
    let resultColumn = idWithoutObstacles % Const.SQUARE_COLUMN_NUM;
    return [resultRow, resultColumn];
  }

  static getIdCount(map :Array<Array<Space>>) : number {
    return map.flat().filter((space) => space != Space.isObstacle).length;
  }

  static getAdjacentMatrix(map : Array<Array<Space>>) : Array<Array<IsAdjacent>> {
    let adjacentMatrix : Array<Array<IsAdjacent>> = new Array(Plane.getIdCount(map));
    for( let i :number = 0; i < Plane.getIdCount(map); i++) {
      adjacentMatrix[i] = new Array(Plane.getIdCount(map));
    }
    for( let i :number = 0; i < map.length; i++) {
      for( let j :number = 0; j < map[i].length; j++) {
          if(map[i][j] != Space.isObstacle && map[i][j + 1] != Space.isObstacle) {
          let vertexId1 = Plane.getVertexIdsFor(map, i, j);
          let vertexId2 = Plane.getVertexIdsFor(map, i, j + 1);
            adjacentMatrix[vertexId1][vertexId2] = IsAdjacent.Yes;
          }
          if(map[i][j] != Space.isObstacle && map[i + 1][j] != Space.isObstacle) {
            let vertexId1 = Plane.getVertexIdsFor(map, i, j);
            let vertexId2 = Plane.getVertexIdsFor(map, i + 1, j);
            adjacentMatrix[vertexId1][vertexId2] = IsAdjacent.Yes;
          }
          if(map[i][j] != Space.isObstacle && map[i][j - 1] != Space.isObstacle) {
            let vertexId1 = Plane.getVertexIdsFor(map, i, j);
            let vertexId2 = Plane.getVertexIdsFor(map, i, j - 1);
            adjacentMatrix[vertexId1][vertexId2] = IsAdjacent.Yes;
          }
          if(map[i][j] != Space.isObstacle && map[i - 1][j] != Space.isObstacle) {
            let vertexId1 = Plane.getVertexIdsFor(map, i, j);
            let vertexId2 = Plane.getVertexIdsFor(map, i - 1, j);
            adjacentMatrix[vertexId1][vertexId2] = IsAdjacent.Yes;
          }
        }
      }
    return adjacentMatrix;
  }
  
  getVertexIdBy(row: Number, col: Number) : Number {
    return 0;
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