import { Square } from './Square';
import { Color } from './Union';

export abstract class Obstacle implements Square{
  static color : Color | undefined;
  
  public paint(): void {
    // console.log("paint");
  }
  public draw() : void {
    // console.log("draw");
  }
  public getCenter() : [Number, Number] {
    return [0, 0];
  }
}
