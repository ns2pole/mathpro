import { Edge } from './Edge';
import { Vacant } from './Vacant';
import { Start } from './Start';
import { Goal } from './Goal';
import { Obstacle } from './Obstacle';
import { Space, IsAdjacent } from './Union';
import { Const } from './Const';
import { isInside } from './FunctionModule';

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
        map[i][j] = "isVacant";
      }
    }
    for( let i :number = 0; i < Const.OBSTACLE_NUM; i++) {
        map[Plane.getRandomRow()][Plane.getRandomColumn()] = "isObstacle";
    }
    map[Plane.getRandomRow()][Plane.getRandomColumn()] =  "isStart"
    map[Plane.getRandomRow()][Plane.getRandomColumn()] = "isGoal"
    return map;
  }
  
  //Obstacle以外の場所のV、row,columnに対応するVertexのidを取得する
  static getCountOfObstaclesUntil(map : Array<Array<Space>>, row : number, column :number) : number {
    let obstaclesNum : number = 0;
    for( let i :number = 0; i < Const.SQUARE_ROW_NUM; i++) {
      for( let j :number = 0; j < Const.SQUARE_COLUMN_NUM; j++) {
        if(map[i][j] == "isObstacle") {
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
    //rowごとに要素の数がバラバラでも動くようにしている。
    //ex. mapが0行目は3要素、1行目は4要素でかつrow=2ならば、numOfelementUntilrow=7となる。
    let numOfelementUntilrow : number = 0;
    for( let i :number = 0; i < row; i++) {
      numOfelementUntilrow += map[i].length;
    }
    return numOfelementUntilrow + column - Plane.getCountOfObstaclesUntil(map, row, column);
  }

  //Vertexのidから、Mapのrowとcolumnを取得する
  static toRowColumnFor(map : Array<Array<Space>>, id : number) : [Number, Number] {
    let count : number = 0;
    for( let i :number = 0; i < map.length; i++) {
      for( let j :number = 0; j < map[i].length; j++) {
        if(map[i][j] != "isObstacle") {
          if(count == id) {
            return [i, j];
          }
          count++;
        }
      }
    }
    //TODO:error処理
    return [0, 0];
  }

  static getIdCount(map :Array<Array<Space>>) : number {
    return map.flat().filter((space) => space != "isObstacle").length;
  }

  // static setIsAdjacent(map,[a, b], [c, d], yesOrNo) 

  static getAdjacentMatrix(map : Array<Array<Space>>) : Array<Array<IsAdjacent>> {
    let adjacentMatrix : Array<Array<IsAdjacent>> = new Array(Plane.getIdCount(map));
    
    for( let i :number = 0; i < Plane.getIdCount(map); i++) {
      adjacentMatrix[i] = new Array(Plane.getIdCount(map));
    }
    for( let i :number = 0; i < map.length; i++) {
      for( let j :number = 0; j < map[i].length; j++) {
        if(isInside(map, i, j)) {
          if(map[i][j] != "isObstacle" && map[i][j + 1] != "isObstacle") {
            adjacentMatrix[Plane.getVertexIdsFor(map, i, j)][Plane.getVertexIdsFor(map, i, j + 1)] = "Adjacent";
            adjacentMatrix[Plane.getVertexIdsFor(map, i, j + 1)][Plane.getVertexIdsFor(map, i, j)] = "Adjacent";
          }
          if(map[i][j] != "isObstacle" && map[i][j - 1] != "isObstacle") {
            adjacentMatrix[Plane.getVertexIdsFor(map, i, j)][Plane.getVertexIdsFor(map, i, j - 1)] = "Adjacent";
            adjacentMatrix[Plane.getVertexIdsFor(map, i, j - 1)][Plane.getVertexIdsFor(map, i, j)] = "Adjacent";
          }
          if(map[i][j] != "isObstacle" && map[i + 1][j] != "isObstacle") {
            adjacentMatrix[Plane.getVertexIdsFor(map, i, j)][Plane.getVertexIdsFor(map, i + 1, j)] = "Adjacent";
            adjacentMatrix[Plane.getVertexIdsFor(map, i + 1, j)][Plane.getVertexIdsFor(map, i, j)] = "Adjacent";
          }
          if(map[i][j] != "isObstacle" && map[i - 1][j] != "isObstacle") {
            adjacentMatrix[Plane.getVertexIdsFor(map, i, j)][Plane.getVertexIdsFor(map, i - 1, j)] = "Adjacent";
            adjacentMatrix[Plane.getVertexIdsFor(map, i - 1, j)][Plane.getVertexIdsFor(map, i, j)] = "Adjacent";
          }
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