import { Vertex } from './Vertex';
import { Space } from './Union';
import { getXOriginForDrawing, getYOriginForDrawing } from './Const';
export class Square extends Vertex{
  
  kind : Space
  row : number
  column : number
  isSearched : boolean = false;
  static size : number = 1 / 70;
  
  draw(s : any): void {
    switch (this.kind) {
      case "isObstacle":
        s.fill('black');
        s.rect(this.getLeftTopCornerX(s), this.getLeftTopCornerY(s), Square.getSize(s), Square.getSize(s));
        break;
      case "isStart":
        s.fill('green');
        s.rect(this.getLeftTopCornerX(s), this.getLeftTopCornerY(s), Square.getSize(s), Square.getSize(s));
        break;
      case "isGoal":
        s.fill('yellow');
        s.rect(this.getLeftTopCornerX(s), this.getLeftTopCornerY(s), Square.getSize(s), Square.getSize(s));
        break;
      case "isVacant":
        s.fill('white');
        s.rect(this.getLeftTopCornerX(s), this.getLeftTopCornerY(s), Square.getSize(s), Square.getSize(s)); 
        break;
    }
  }
  // draw(s:any) : void {
    
  // }
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

  getLeftTopCornerX(s: any): number {
    return Square.getSize(s) * this.column + getXOriginForDrawing(s)
  }

  getLeftTopCornerY(s: any): number {
    return Square.getSize(s) * this.row + getYOriginForDrawing(s)
  }

}