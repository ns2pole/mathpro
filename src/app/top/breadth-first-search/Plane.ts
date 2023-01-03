import { IsAdjacent } from './IsAdjacent';
import { Edge } from './Edge';
import { Vacant } from './Vacant';
import { Start } from './Start';
import { Goal } from './Goal';
import { Obstacle } from './Obstacle';
import { Space } from './Space';

export class Plane {
  rowSize : Number | undefined;
  columnSize : Number | undefined;
  obstacleNum : Number | undefined;
  map : Array<Array<Space>> | undefined; 
  adjacentMatrix : Array<Array<IsAdjacent>> | undefined;
  constructor(rowSize : Number, columnSize : Number, obstacleNum : Number) {
    this.rowSize = rowSize;
    this.columnSize = columnSize;
    this.obstacleNum = obstacleNum;
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
}