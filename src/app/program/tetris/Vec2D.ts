class Vec2D {
  constructor(public x: number, public y: number) {}

  public getAddedVecFor(vec2D: Vec2D): Vec2D {
      const clone = new Vec2D(this.x, this.y);
      clone.x += vec2D.x;
      clone.y += vec2D.y;
      return clone;
  }
}
