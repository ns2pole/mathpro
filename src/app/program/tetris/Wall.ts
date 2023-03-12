class Wall {
  position: { x: number, y: number };
  img: HTMLImageElement;

  constructor(positionVec2D: { x: number, y: number }) {
    this.position = positionVec2D;
    this.img = document.getElementById("wallImg") as HTMLImageElement;
  }

  draw(context2d: CanvasRenderingContext2D) {
    context2d.drawImage(
      this.img,
      this.position.x * ONE_CELL_SIZE,
      this.position.y * ONE_CELL_SIZE,
      BLOCK_SIZE,
      BLOCK_SIZE
    );
  }
}
