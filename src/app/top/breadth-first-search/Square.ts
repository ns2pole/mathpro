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
    switch (this.kind) {
      case "isObstacle":
        p.fill('black');
        p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
        break;
      case "isStart":
        p.fill('green');
        p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
        break;
      case "isGoal":
        p.fill('yellow');
        p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
        break;
      case "isVacant":
        p.fill('white');
        p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Square.getSize(p), Square.getSize(p));
        break;
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
