import { Block } from './Block';
import { ShapeS } from './ShapeS';
import { ShapeT } from './ShapeT';
import { SHAPE_CODE_OF_SHAPE_S, SHAPE_CODE_OF_SHAPE_T, HOW_MANY_SHAPES} from './Constants';
import { Vec2D } from './Vec2D';
import { CELL_STATUS, Shape } from './Union';
import * as p5 from 'p5';
export class FourPiece{
  protected shape: Shape;
  protected position: Vec2D;
  public blocks = new Array<Block>();

  constructor(shape: Shape, position: Vec2D) {
    this.shape = shape;
    this.position = position;
    this.blocks = this.getBlocks();
  }

  getBlocks(): Array<Block> {
    switch (this.shape) {
      case "SHAPE_S":
        return this.getBlocksForShapeS();
      default:
        return this.getBlocksForShapeT();
    }
  }


  canPlaceTo(map : CELL_STATUS[][]): boolean {
    for (let i = 0; i < this.blocks.length; i++) {
        if (!this.blocks[i].canPlaceTo(map)) {
            return false;
        }
    }
    return true;
  }

  static getShapeRandomly(): Shape {
    const randomNum : number = Math.floor(Math.random() * HOW_MANY_SHAPES);
    switch (randomNum) {
      case SHAPE_CODE_OF_SHAPE_S:
        return "SHAPE_S";
      default:
        return "SHAPE_T";
    }
  }

  moveDown(): FourPiece {
      return new FourPiece(this.shape, this.position.getAddedVecFor(new Vec2D(0, 1)));
  }

  moveRight(): FourPiece {
      return new FourPiece(this.shape, this.position.getAddedVecFor(new Vec2D(1, 0)));
  }

  moveLeft(): FourPiece {
      return new FourPiece(this.shape, this.position.getAddedVecFor(new Vec2D(-1, 0)));
  }

  draw(p : p5) {
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].draw(p);
    }
  }

  getBlocksForShapeS(): Array<Block> {
    let blocks : Array<Block> = new Array<Block>();
    blocks.push(new Block(this.position));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 0))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(-1, 1))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
    return blocks;
  }

  getBlocksForShapeT(): Array<Block> {
    let blocks : Array<Block> = new Array<Block>();
    blocks.push(new Block(this.position));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 0))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(-1, 0))));
    return blocks;
  }



}
