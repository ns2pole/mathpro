import * as p5 from 'p5';
import { Field } from '../calc/Field';
import { getXOriginForDrawing, getYOriginForDrawing, WALL_CODE, FIXED_BLOCK_CODE, CELL_SIZE} from '../calc/Constants';
import { Vec2D } from './Vec2D';
import { CELL_STATUS } from './Union';
export class Block {
  public position: Vec2D;

  constructor(position: Vec2D) {
      this.position = position;
  }

  public canPlaceTo(map : CELL_STATUS[][]): boolean {
      if (map[this.position.y][this.position.x] == "WALL" || Field.map[this.position.y][this.position.x] == "FIXED_BLOCK") {
          return false;
      } else {
        return true;
      }
  }

  draw(p: p5) {
    p.fill('green');
    p.rect(this.getLeftTopCornerX(p), this.getLeftTopCornerY(p), Block.getSize(p), Block.getSize(p));
  }


  static getSize(s: any) : number {
      return s.windowWidth * CELL_SIZE;
  }

  getLeftTopCornerX(p: p5): number {
    return Block.getSize(p) * this.position.x + getXOriginForDrawing(p)
  }

  getLeftTopCornerY(p: p5): number {
    return Block.getSize(p) * this.position.y + getYOriginForDrawing(p)
  }

}
