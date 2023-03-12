class ShapeT extends FourPieces {
  private shapeCode: number;

  constructor(positionVec2D: Vec2D) {
      super(positionVec2D);
      this.blocks = [];
      this.blocks.push(new Block(positionVec2D));
      this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(1, 0))));
      this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(0, 1))));
      this.blocks.push(new Block(this.position.getAddedVecFor(new Vec2D(-1, 0))));
      this.shapeCode = SHAPE_CODE_OF_SHAPE_T;
  }

  public draw(context2d: CanvasRenderingContext2D): void {
      for (let i = 0; i < this.blocks.length; i++) {
          this.blocks[i].draw(context2d);
      }
  }
}
