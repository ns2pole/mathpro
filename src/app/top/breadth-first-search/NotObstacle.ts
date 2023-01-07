import { Color } from './Union';
import { Vertex } from './Vertex';
import { Square } from './Square';
export abstract class NotObstacle extends Vertex implements Square{
  static color : Color | undefined;
  
  public paint(): void {
    // console.log("paint");
  }
  public draw(s:any) : void {
    s.fill(NotObstacle.color);
  }
  public getCenter() : [Number, Number] {
    return [0, 0];
  }
  constructor(id : number) {
    super(id);
  }
  public test111(): Number {
    return 400;
  }
  public test333(): Number {
    return 500;
  }
}
