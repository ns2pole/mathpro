class FourPieces {
  protected position: Vec2D;
  protected blocks = new Array<Block>();

  constructor(position: Vec2D) {
      this.position = position;
  }

  canBePlacedIn(field: Field): boolean {
      for (let i = 0; i < this.blocks.length; i++) {
          if (!this.blocks[i].canBePlacedIn(field)) {
              return false;
          }
      }
      return true;
  }

  static getShapeCodeRandomly(): number {
      return Math.floor(Math.random() * HOW_MANY_SHAPES);
  }

  static getInitFourPieces(): FourPieces {
      switch (FourPieces.getShapeCodeRandomly()) {
          case SHAPE_CODE_OF_SHAPE_S:
              return new ShapeS(INITIAL_POSITION_VEC_2D);
          case SHAPE_CODE_OF_SHAPE_T:
              return new ShapeT(INITIAL_POSITION_VEC_2D);
          default:
              return new FourPieces(INITIAL_POSITION_VEC_2D);
      }
  }

  static getFourPiecesOf(shapeCode: number, position: Vec2D): FourPieces {
      switch (shapeCode) {
          case SHAPE_CODE_OF_SHAPE_S:
              return new ShapeS(position);
          case SHAPE_CODE_OF_SHAPE_T:
              return new ShapeT(position);
          default:
              return new FourPieces(position);
      }
  }

  getInstanceMovedDown(): FourPieces {
      return FourPieces.getFourPiecesOf(this.shapeCode, this.position.getAddedVecFor(new Vec2D(0, 1)));
  }

  getInstanceMovedRight(): FourPieces {
      return FourPieces.getFourPiecesOf(this.shapeCode, this.position.getAddedVecFor(new Vec2D(1, 0)));
  }

  getInstanceMovedLeft(): FourPieces {
      return FourPieces.getFourPiecesOf(this.shapeCode, this.position.getAddedVecFor(new Vec2D(-1, 0)));
  }
}
