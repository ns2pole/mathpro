import { Space } from './Union';
import { LABYRINTH_ROW_NUM, LABYRINTH_COLUMN_NUM, OBSTACLE_NUM, CANVAS_BACKGROUND_COLOR, getSquareSize, getXOriginForDrawing, getYOriginForDrawing} from './Const';
import { Plane } from './Plane';
import { getRandomInt } from './FunctionModule';
export class Labyrinth2D extends Array<Array<Space>> {
    constructor() {
        super();
    }


    static generateLabyrinth(labRowNum : number, labColumnNum : number, obstaclesNum : number) : Labyrinth2D {
        let map : Labyrinth2D = new Labyrinth2D();
        for( let i :number = 0; i < labRowNum; i++) {
          map[i] = new Array(labColumnNum);
          for( let j :number = 0; j < labColumnNum; j++) {
            map[i][j] = "isVacant";
          }
        }
        for( let i :number = 0; i < obstaclesNum; i++) {
            map[getRandomInt(0, labRowNum)][getRandomInt(0, labColumnNum)] = "isObstacle";
        }
        map[getRandomInt(0, labRowNum)][getRandomInt(0, labColumnNum)] =  "isStart"
        map[getRandomInt(0, labRowNum)][getRandomInt(0, labColumnNum)] = "isGoal"
        return map;
    }

    getVertexIdOf(row : number, column : number) : number {
        //rowごとに要素の数がバラバラでも動くようにしている。
        //ex. mapが0行目は3要素、1行目は4要素でかつrow=2ならば、numOfelementUntilrow=7となる。
        let numOfelementUntilrow : number = 0;
        for( let i :number = 0; i < row; i++) {
            numOfelementUntilrow += this[i].length;
        }
        return numOfelementUntilrow + column - this.getCountOfObstaclesUntil(row, column);
    }

    //Vertexのidから、Mapのrowとcolumnを取得する
    getRowColumnOf(vertexId : number) : [Number, Number] {
        let count : number = 0;
        for( let i :number = 0; i < this.length; i++) {
            for( let j :number = 0; j < this[i].length; j++) {
                if(this[i][j] != "isObstacle") {
                if(count == vertexId) {
                    return [i, j];
                }
                count++;
                }
            }
        }
        //TODO:error処理
        return [0, 0];
    }

    getIdCount() : number {
        return this.flat().filter((space) => space !== "isObstacle").length;
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
