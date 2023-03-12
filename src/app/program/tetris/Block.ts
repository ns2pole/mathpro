import * as p5 from 'p5';
import { Field } from './Field';
import { getXOriginForDrawing, getYOriginForDrawing, WALL_CODE, FIXED_BLOCK_CODE, WIDTH } from './Constants';
import { Vec2D } from './Vec2D';
export class Block {
  public position: Vec2D;
  private img: HTMLImageElement;

  constructor(position: Vec2D) {
      this.position = position;
      this.img = document.getElementById("blockImg") as HTMLImageElement;
  }

  public canBePlacedIn(field: Field): boolean {
      if (field.map[this.position.y][this.position.x] == FIXED_BLOCK_CODE) {
          return false;
      } else if (field.map[this.position.y][this.position.x] == WALL_CODE) {
          return false;
      } else {
          return true;
      }
  }

  draw(p: p5) {
    p.fill('black');
    p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Block.getSize(p), Block.getSize(p));
  }


  static getSize(s: any) : number {
      return s.windowWidth * WIDTH;
  }

  getLeftTopCornerX(p: p5): number {
    return Block.getSize(p) * this.position.x + getXOriginForDrawing(p)
  }

  getLeftTopCornerY(p: p5): number {
    return Block.getSize(p) * this.position.y + getYOriginForDrawing(p)
  }

}
