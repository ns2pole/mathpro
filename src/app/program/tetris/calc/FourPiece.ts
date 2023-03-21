import { Block } from './Block';
import { SHAPE_CODE_OF_SHAPE_S, SHAPE_CODE_OF_SHAPE_T, SHAPE_CODE_OF_SHAPE_I, SHAPE_CODE_OF_SHAPE_J, SHAPE_CODE_OF_SHAPE_L, SHAPE_CODE_OF_SHAPE_O, SHAPE_CODE_OF_SHAPE_Z, HOW_MANY_SHAPES} from './Constants';
import { Vec2D } from './Vec2D';
import { CELL_STATUS, Shape, Rotation } from './Union';
export class FourPiece{
  protected shape: Shape;
  protected position: Vec2D;
  public blocks = new Array<Block>();
  public rotation: Rotation;

  constructor(shape: Shape, position: Vec2D, rotation: Rotation) {
    this.shape = shape;
    this.position = position;
    this.rotation = rotation;
    this.blocks = this.getBlocks();
  }

  getBlocksRotateZero(): Array<Block> {
    let blocks = new Array<Block>();
    switch (this.shape) {
      case "SHAPE_S":
        blocks = this.getBlocksForShapeS();
        break;
      case "SHAPE_T":
        blocks =  this.getBlocksForShapeT();
        break;
      case "SHAPE_Z":
        blocks =  this.getBlocksForShapeZ();
        break;
      case "SHAPE_L":
        blocks =  this.getBlocksForShapeL();
        break;
      case "SHAPE_J":
        blocks =  this.getBlocksForShapeJ();
        break;
      case "SHAPE_I":
        blocks =  this.getBlocksForShapeI();
        break;
      default:
        blocks = this.getBlocksForShapeO();
        break;
    }
    return blocks;
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
      case SHAPE_CODE_OF_SHAPE_T:
        return "SHAPE_T";
      case SHAPE_CODE_OF_SHAPE_Z:
        return "SHAPE_Z";
      case SHAPE_CODE_OF_SHAPE_L:
        return "SHAPE_L";
      case SHAPE_CODE_OF_SHAPE_J:
        return "SHAPE_J";
      case SHAPE_CODE_OF_SHAPE_I:
        return "SHAPE_I";
      default:
        return "SHAPE_O";
    }
  }

  getFourPieceMovedDown(): FourPiece {
      return new FourPiece(this.shape, this.position.getAddedVecFor(new Vec2D(0, 1)), this.rotation);
  }

  canMoveRight(map : CELL_STATUS[][]): boolean {
    for (let i = 0; i < this.blocks.length; i++) {
      if (!this.blocks[i].canMoveRight(map)) {
        return false;
      }
    }
    return true;
  }

  canMoveLeft(map : CELL_STATUS[][]): boolean {
    for (let i = 0; i < this.blocks.length; i++) {
      if (!this.blocks[i].canMoveLeft(map)) {
        return false;
      }
    }
    return true;
  }

  canMoveDown(map : CELL_STATUS[][]): boolean {
    for (let i = 0; i < this.blocks.length; i++) {
      if (!this.blocks[i].canMoveDown(map)) {
        return false;
      }
    }
    return true;
  }

  getFourPieceMovedRight(): FourPiece {
    return new FourPiece(this.shape, this.position.getAddedVecFor(new Vec2D(1, 0)), this.rotation);
  }

  getFourPieceMovedLeft(): FourPiece {
    return new FourPiece(this.shape, this.position.getAddedVecFor(new Vec2D(-1, 0)), this.rotation);
  }

  getFourPieceAntiClockWiselyRotated(): FourPiece {
    let result : FourPiece;
    if (this.rotation === 270) {
      result = new FourPiece(this.shape, this.position, 0);
    } else if(this.rotation === 180) {
      result = new FourPiece(this.shape, this.position, 270);
    } else if(this.rotation === 90) {
      result = new FourPiece(this.shape, this.position, 180);
    } else {
      result = new FourPiece(this.shape, this.position, 90);
    }
    return result;
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

  getBlocksForShapeZ(): Array<Block> {
    let blocks : Array<Block> = new Array<Block>();
    blocks.push(new Block(this.position));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(-1, 0))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 1))));
    return blocks;
  }

  getBlocksForShapeL(): Array<Block> {
    let blocks : Array<Block> = new Array<Block>();
    blocks.push(new Block(this.position));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 2))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 2))));
    return blocks;
  }

  getBlocksForShapeJ(): Array<Block> {
    let blocks : Array<Block> = new Array<Block>();
    blocks.push(new Block(this.position));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 2))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(-1, 2))));
    return blocks;
  }

  getBlocksForShapeO(): Array<Block> {
    let blocks : Array<Block> = new Array<Block>();
    blocks.push(new Block(this.position));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 0))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 1))));
    return blocks;
  }

  getBlocksForShapeI(): Array<Block> {
    let blocks : Array<Block> = new Array<Block>();
    blocks.push(new Block(this.position));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 2))));
    blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 3))));
    return blocks;
  }

  getBlocks(): Block[] {
    const tmp : Block[] = this.getBlocksRotateZero();
    let result : Block[] = new Array<Block>();
    for (let i = 0; i < tmp.length; i++) {
      const position : Vec2D = tmp[i].position;
      const rotatedPosition : Vec2D = position.rotateAround(this.position, this.rotation);
      result.push(new Block(rotatedPosition));
    }
    return result;
  }

  canRotateAntiClockWise(map : CELL_STATUS[][]): boolean {
    for (let i = 0; i < this.blocks.length; i++) {
      if (!this.blocks[i].canRotateAntiClockWiseAround(this.position, map)) {
        return false;
      }
    }
    return true;
  }

}
