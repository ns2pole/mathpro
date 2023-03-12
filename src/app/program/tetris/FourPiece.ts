import { Block } from './Block';
import { Field } from './Field';
import { ShapeS } from './ShapeS';
import { ShapeT } from './ShapeT';
import { SHAPE_CODE_OF_SHAPE_S, SHAPE_CODE_OF_SHAPE_T, HOW_MANY_SHAPES, INITIAL_POSITION_VEC_2D} from './Constants';
import { Vec2D } from './Vec2D';
import * as p5 from 'p5';
export class FourPiece {
  protected position: Vec2D;
  public blocks = new Array<Block>();

  constructor(position: Vec2D) {
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

  // static getInitFourPiece(): FourPiece {
  //     switch (FourPiece.getShapeCodeRandomly()) {
  //         case SHAPE_CODE_OF_SHAPE_S:
  //             return new ShapeS(INITIAL_POSITION_VEC_2D);
  //         case SHAPE_CODE_OF_SHAPE_T:
  //             return new ShapeT(INITIAL_POSITION_VEC_2D);
  //         default:
  //             return new FourPiece(INITIAL_POSITION_VEC_2D);
  //     }
  // }

  static getFourPieceOf(position: Vec2D): FourPiece {
    return new FourPiece(position);
  }

  //質問。汚い。
  getInstanceMovedDown(): FourPiece {
      return new ShapeS(this.position.getAddedVecFor(new Vec2D(0, 1)));
  }

  getInstanceMovedRight(): FourPiece {
      return FourPiece.getFourPieceOf(this.position.getAddedVecFor(new Vec2D(1, 0)));
  }

  getInstanceMovedLeft(): FourPiece {
      return FourPiece.getFourPieceOf(this.position.getAddedVecFor(new Vec2D(-1, 0)));
  }

  draw(p : p5) {
    console.log("111")

    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].draw(p);
    }
  }
}
