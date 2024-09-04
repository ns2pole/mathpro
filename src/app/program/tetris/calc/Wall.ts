import * as p5 from "p5";
import { getXOriginForDrawing, getYOriginForDrawing, CELL_SIZE_FOR_PC } from "./Constants";
export class Wall {
  position: { x: number, y: number };
  img: HTMLImageElement;

  constructor(positionVec2D: { x: number, y: number }) {
    this.position = positionVec2D;
    this.img = document.getElementById("wallImg") as HTMLImageElement;
  }


  static getSize(s: any) : number {
    return screen.width * CELL_SIZE_FOR_PC;
  }

  getLeftTopCornerX(p: p5): number {
    return Wall.getSize(p) * this.position.x + getXOriginForDrawing(p)
  }

  getLeftTopCornerY(p: p5): number {
    return Wall.getSize(p) * this.position.y + getYOriginForDrawing(p)
  }

}
