import { Edge } from './Edge';
import { Vacant } from './Vacant';
import { Start } from './Start';
import { Goal } from './Goal';
import { Obstacle } from './Obstacle';
import { Space, IsAdjacent } from './Union';
import { SQUARE_ROW_NUM, SQUARE_COLUMN_NUM, OBSTACLE_NUM, CANVAS_BACKGROUND_COLOR, getSquareSize, getXOriginForDrawing, getYOriginForDrawing} from './Const';
import { isInside } from './FunctionModule';
import { Labyrinth2D } from './Labyrinth2D';

export class Plane {
  map : Labyrinth2D;
  adjacentMatrix : Array<Array<IsAdjacent>>;
  constructor() {
    this.map = Plane.generateMap(); 
    this.adjacentMatrix = Plane.getAdjacentMatrix(this.map);
  }

  static generateMap() : Labyrinth2D {
    let map : Labyrinth2D = new Labyrinth2D();
    for( let i :number = 0; i < SQUARE_ROW_NUM; i++) {
      map[i] = new Array(SQUARE_COLUMN_NUM);
      for( let j :number = 0; j < SQUARE_COLUMN_NUM; j++) {
        map[i][j] = "isVacant";
      }
    }
    for( let i :number = 0; i < OBSTACLE_NUM; i++) {
        map[Plane.getRandomRow()][Plane.getRandomColumn()] = "isObstacle";
    }
    map[Plane.getRandomRow()][Plane.getRandomColumn()] =  "isStart"
    map[Plane.getRandomRow()][Plane.getRandomColumn()] = "isGoal"
    return map;
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

  static getAdjacentMatrix(map : Labyrinth2D) : Array<Array<IsAdjacent>> {
    let adjacentMatrix : Array<Array<IsAdjacent>> = new Array(Plane.getIdCount(map));
    
    for( let i :number = 0; i < Plane.getIdCount(map); i++) {
      adjacentMatrix[i] = new Array(Plane.getIdCount(map));
    }
    for( let i :number = 0; i < map.length; i++) {
      for( let j :number = 0; j < map[i].length; j++) {
        if(isInside(map, i, j)) {
          if(map[i][j] != "isObstacle" && map[i][j + 1] != "isObstacle") {
            adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i, j + 1)] = "Adjacent";
            adjacentMatrix[map.getVertexIdOf(i, j + 1)][map.getVertexIdOf(i, j)] = "Adjacent";
          }
          if(map[i][j] != "isObstacle" && map[i][j - 1] != "isObstacle") {
            adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i, j - 1)] = "Adjacent";
            adjacentMatrix[map.getVertexIdOf(i, j - 1)][map.getVertexIdOf(i, j)] = "Adjacent";
          }
          if(map[i][j] != "isObstacle" && map[i + 1][j] != "isObstacle") {
            adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i + 1, j)] = "Adjacent";
            adjacentMatrix[map.getVertexIdOf(i + 1, j)][map.getVertexIdOf(i, j)] = "Adjacent";
          }
          if(map[i][j] != "isObstacle" && map[i - 1][j] != "isObstacle") {
            adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i - 1, j)] = "Adjacent";
            adjacentMatrix[map.getVertexIdOf(i - 1, j)][map.getVertexIdOf(i, j)] = "Adjacent";
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
    return Math.floor(Math.random() * SQUARE_ROW_NUM);
  }
  
  static getRandomColumn() : number {
    return Math.floor(Math.random() * SQUARE_COLUMN_NUM);
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
      for (let i = 0; i < SQUARE_ROW_NUM; i++) {
        for (let j = 0; j < SQUARE_COLUMN_NUM; j++) {
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
    for (let i = 0; i < SQUARE_ROW_NUM; i++) {
      for (let j = 0; j < SQUARE_COLUMN_NUM; j++) {
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