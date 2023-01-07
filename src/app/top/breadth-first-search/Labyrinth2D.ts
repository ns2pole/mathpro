import { NotObstacle } from './NotObstacle';
import { Color, IsAdjacent, Space } from './Union';
import { Plane } from './Plane';
export class Labyrinth2D extends Array<Array<Space>> {
    constructor() {
        super();
    }

    getVertexIdFor(x : number, y : number) : number {
        //rowごとに要素の数がバラバラでも動くようにしている。
        //ex. mapが0行目は3要素、1行目は4要素でかつrow=2ならば、numOfelementUntilrow=7となる。
        let numOfelementUntilrow : number = 0;
        for( let i :number = 0; i < y; i++) {
            numOfelementUntilrow += this[i].length;
        }
        return numOfelementUntilrow + x - this.getCountOfObstaclesUntil(y, x);
    }

    //Obstacle以外の場所のV、row,columnに対応するVertexのidを取得する
    getCountOfObstaclesUntil(row : number, column :number) : number {
        let obstaclesNum : number = 0;
        for( let i :number = 0; i < this.length; i++) {
            for( let j :number = 0; j < this[i].length; j++) {
                if(this[i][j] == "isObstacle") {
                obstaclesNum++;
                }
                if(i == row && j == column) {
                return obstaclesNum;
                }
            }
        }
        //TODO:error処理
        return 0;
    }
}
