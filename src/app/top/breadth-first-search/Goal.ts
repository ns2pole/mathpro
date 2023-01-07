import { NotObstacle } from './NotObstacle';
import { Color } from './Union';
export class Goal extends NotObstacle {
    static override color : Color = "Red";
    isSearched : boolean = false;
    override draw(s:any) : void {
        s.fill(Goal.color);
    }
}
