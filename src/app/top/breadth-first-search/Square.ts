import { Vertex } from './Vertex';
import { IsSearched, Space } from './Union';
import { getXOriginForDrawing, getYOriginForDrawing } from './Const';
import * as p5 from 'p5';
export class Square extends Vertex{

  kind : Space
  row : number
  column : number
  isSearched : IsSearched = false;
  static size : number = 1 / 120;

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
      p.fill('yellow');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    }
    if(this.kind == "isStart") {
      p.fill('blue');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    } else if(this.kind == "isGoal") {
      p.fill('red');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    } else if(this.kind == "isOnSolutionPath") {
      p.fill('green');
      p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
    }
  }

  drawForSolution(p: p5) : void {
    switch (this.kind) {
      case "isStart":
        p.fill('green');
        p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
        break;
      case "isGoal":
        p.fill('yellow');
        p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
        break;
      case "isVacant":
        p.fill('blue');
        p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
        break;
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
    return s.windowWidth * Square.size;
  }

  getLeftTopCornerX(p: p5): number {
    return Square.getSize(p) * this.column + getXOriginForDrawing(p)
  }

  getLeftTopCornerY(p: p5): number {
    return Square.getSize(p) * this.row + getYOriginForDrawing(p)
  }

}
