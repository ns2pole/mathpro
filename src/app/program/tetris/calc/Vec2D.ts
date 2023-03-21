import { Rotation } from "./Union";

export class Vec2D {
  constructor(public x: number, public y: number) {}

  public getAddedVecFor(vec2D: Vec2D): Vec2D {
      const clone = new Vec2D(this.x, this.y);
      clone.x += vec2D.x;
      clone.y += vec2D.y;
      return clone;
  }

  public rotateAround(center : Vec2D, rotate : Rotation) : Vec2D {
    const diffX = this.x - center.x;
    const diffY = this.y - center.y;
    let result : Vec2D;
    if (rotate % 360 == 0) {
      result = new Vec2D( center.x + diffX, center.y + diffY);
    } else if (rotate % 360 == 90) {
      result = new Vec2D( center.x - diffY, center.y + diffX);
    } else if (rotate % 360 == 180) {
      result = new Vec2D( center.x - diffX, center.y - diffY);
    }
    else {
      result = new Vec2D( center.x + diffY, center.y - diffX);
    }
    return result;
  }
}
