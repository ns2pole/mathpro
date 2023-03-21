import { Block } from './Block';
import { ShapeS } from './ShapeS';
import { ShapeT } from './ShapeT';
import { SHAPE_CODE_OF_SHAPE_S, SHAPE_CODE_OF_SHAPE_T, HOW_MANY_SHAPES, INITIAL_POSITION_VEC_2D} from './Constants';
import { Vec2D } from './Vec2D';
import { Shape } from './Union';
import * as p5 from 'p5';
export class FourPiece implements Movable{
  protected shape: Shape;
  protected position: Vec2D;
  public blocks = new Array<Block>();

  constructor(shape: Shape, position: Vec2D = INITIAL_POSITION_VEC_2D) {
    this.shape = shape;
    this.position = position;
  }

  canBePlaced(): boolean {
      for (let i = 0; i < this.blocks.length; i++) {
          if (!this.blocks[i].canBePlaced()) {
              return false;
          }
      }
      return true;
  }

  static getShapeCodeRandomly(): number {
      return Math.floor(Math.random() * HOW_MANY_SHAPES);
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
}
