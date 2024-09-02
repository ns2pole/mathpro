import * as p5 from 'p5';
import { getXOriginForDrawing, getYOriginForDrawing, CELL_SIZE_FOR_PC} from '../calc/Constants';
import { Vec2D } from './Vec2D';
import { CELL_STATUS } from './Union';
export class Block {
  public position: Vec2D;
  public isFixed: boolean;

  constructor(position: Vec2D, isFixed: boolean = false) {
      this.position = position;
      this.isFixed = isFixed;
  }

  public canPlaceTo(map : CELL_STATUS[][]): boolean {
      if (map[this.position.y][this.position.x] == "WALL" || map[this.position.y][this.position.x] == "FIXED_BLOCK") {
          return false;
      } else {
        return true;
      }
  }



  static getSize(s: any) : number {
      return s.windowWidth * CELL_SIZE_FOR_PC;
  }

  getLeftTopCornerX(p: p5): number {
    return Block.getSize(p) * this.position.x + getXOriginForDrawing(p)
  }

  getLeftTopCornerY(p: p5): number {
    return Block.getSize(p) * this.position.y + getYOriginForDrawing(p)
  }

  canMoveRight(map: CELL_STATUS[][]): boolean {
    const virtualPosition = new Vec2D(this.position.x + 1, this.position.y);
    const virtualBlock = new Block(virtualPosition);
    return virtualBlock.canPlaceTo(map);
  }

  canMoveLeft(map: CELL_STATUS[][]): boolean {
    const virtualPosition = new Vec2D(this.position.x - 1, this.position.y);
    const virtualBlock = new Block(virtualPosition);
    return virtualBlock.canPlaceTo(map);
  }

  canMoveDown(map: CELL_STATUS[][]): boolean {
    const virtualPosition = new Vec2D(this.position.x, this.position.y + 1);
    const virtualBlock = new Block(virtualPosition);
    return virtualBlock.canPlaceTo(map);
  }

  canRotateAntiClockWiseAround(position: Vec2D, map: CELL_STATUS[][]): boolean {
    const virtualPosition = this.position.rotateAround(position, 90);
    const virtualBlock = new Block(virtualPosition);
    return virtualBlock.canPlaceTo(map);
  }

}
