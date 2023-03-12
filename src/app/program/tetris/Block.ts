class Block {
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

  public draw(context2d: CanvasRenderingContext2D): void {
      context2d.drawImage(
          this.img,
          this.position.x * ONE_CELL_SIZE,
          this.position.y * ONE_CELL_SIZE,
          BLOCK_SIZE,
          BLOCK_SIZE
      );
  }
}
