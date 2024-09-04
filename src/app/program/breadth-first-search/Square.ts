import { Vertex } from './Vertex';
import { IsSearched, Space } from './Union';
import { getXOriginForDrawing, getYOriginForDrawing } from './Const';
import * as p5 from 'p5';
import { SQUARE_SIZE_FOR_LARGE_LABYRINTH, SQUARE_SIZE_FOR_SMALL_LABYRINTH } from './Const';
export class Square extends Vertex{

  kind : Space
  row : number
  column : number
  isSearched : IsSearched = false;

  //TODO:sをp5にする
  draw(p : p5): void {
    //TODO:色塗りの順番に注意する必要あり。どうしたら文脈に依存しなくて済むように書けるのだろう？
    if(this.kind == "isObstacle") {
      p.fill('black');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    } else if(this.kind == "isVacant") {
      p.fill('white');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    }


    if(this.isSearched) {
      p.fill('cyan');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    }
    if(this.kind == "isStart") {
      p.fill('blue');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    } else if(this.kind == "isGoal") {
      p.fill('red');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    }
    if(this.kind == "isOnSolutionPath") {
      p.fill('yellow');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    }
  }

  constructor(id : number, row : number, column : number, kind : Space) {
    super(id);
    this.row = row;
    this.column = column;
    this.kind = kind;
    this.isSearched = false;
  }

  static getSize(s: any) : number {
    // if(s.windowWidth < 1000) {
    //   return s.windowWidth * SQUARE_SIZE_FOR_SMALL_LABYRINTH;
    // } else {
      return s.windowWidth * SQUARE_SIZE_FOR_LARGE_LABYRINTH;
    // }
  }

  getLeftTopCornerX(p: p5): number {
    return Square.getSize(p) * this.column + getXOriginForDrawing(p)
  }

  getLeftTopCornerY(p: p5): number {
    return Square.getSize(p) * this.row + getYOriginForDrawing(p)
  }

}
