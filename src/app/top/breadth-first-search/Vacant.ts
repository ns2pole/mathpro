import { NotObstacle } from './NotObstacle';
import { Color } from './Union';
export class Vacant extends NotObstacle {
  color : Color = "Yellow";
  isSearched : boolean = false;
  public static test4(): Number {
    return 700;
  }
}
