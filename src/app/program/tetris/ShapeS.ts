import { Block } from './Block';
import { FourPiece } from './FourPiece';
import { Vec2D } from './Vec2D';
export class ShapeS extends FourPiece {
  constructor(positionVec2D: Vec2D) {
    super(positionVec2D);
    this.blocks.push(new Block(this.position));
    this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 0))));
    this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(-1, 1))));
    this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
  }

}
