import { NotObstacle } from './NotObstacle';
import { Color } from './Color';
export class Vacant extends NotObstacle {
  color : Color = Color.Yellow;
  isSearched : boolean = false;
  public static test4(): Number {
    return 700;
  }
}
