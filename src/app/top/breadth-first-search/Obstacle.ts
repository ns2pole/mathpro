import * as p5 from 'p5';
import { Square } from './Square';
import { Color } from './Color';
export abstract class Obstacle implements Square{
  static color : Color | undefined;
  size : Number | undefined;
  public paint(): void {
    // console.log("paint");
  }
  public draw() : void {
    // console.log("draw");
  }
  public getCenter() : [Number, Number] {
    return [0, 0];
  }
  public test111(): Number {
    return 400;
  }
  public test333(): Number {
    return 500;
  }
}
