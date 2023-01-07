import { NotObstacle } from './NotObstacle';
import { Color } from './Type';
export class Vacant extends NotObstacle {
  color : Color = "Yellow";
  isSearched : boolean = false;
  public static test4(): Number {
    return 700;
  }
}
