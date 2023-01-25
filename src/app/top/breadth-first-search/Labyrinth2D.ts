import { getRandomInt } from './FunctionModule';
import { Square } from './Square';
import * as p5 from 'p5';
export class Labyrinth2D extends Array<Array<Square>> {
	static rowNum : number = 50;
	static columnNum : number = 50;
	static obstaclesNum : number = Labyrinth2D.rowNum * Labyrinth2D.columnNum / 3;
  searchedIds : Set<number> = new Set<number>();
	constructor() {
  	super();
	}

	static generateLabyrinth() : Labyrinth2D {
		let lab : Labyrinth2D = new Labyrinth2D();
		for( let i :number = 0; i < this.rowNum; i++) {
			lab[i] = new Array(this.columnNum);
			for( let j :number = 0; j < this.columnNum; j++) {
				lab[i][j] = new Square(i * this.rowNum + j, i, j, "isVacant");
			}
		}
		for( let i :number = 0; i < this.obstaclesNum; i++) {
			lab[getRandomInt(0, this.rowNum)][getRandomInt(0, this.columnNum)].kind = "isObstacle";
		}
		lab[getRandomInt(0, this.rowNum)][getRandomInt(0, this.columnNum)].kind =  "isStart"
		lab[getRandomInt(0, this.rowNum)][getRandomInt(0, this.columnNum)].kind = "isGoal"
		return lab;
	}

	getVertexIdOf(row : number, column : number) : number {
		//rowごとに要素の数がバラバラでも動くようにしている。
		//ex. mapが0行目は3要素、1行目は4要素でかつrow=2ならば、numOfelementUntilrow=7となる。
		let numOfelementUntilrow : number = 0;
		for( let i :number = 0; i < row; i++) {
			numOfelementUntilrow += this[i].length;
		}
		return numOfelementUntilrow + column;
	}

	//Vertexのidから、Mapのrowとcolumnを取得する
	getRowColumnOf(vertexId : number) : [number, number] {
		let count : number = 0;
		for( let i :number = 0; i < this.length; i++) {
			for( let j :number = 0; j < this[i].length; j++) {
				if(count == vertexId) {
						return [i, j];
				}
				count++;
			}
		}
		//TODO:error処理
		return [0, 0];
	}

	getIdCount() : number {
		return this.flat().length;
	}

  //反省。やべえ何書いてあるのかわかんねぇ。なんだよnumberって。絶対に型をつけるべきだった。薄々思ってたよ。
  //これ分かりにくくなるかもなぁって。

	draw(p: p5): void {
		for (let i = 0; i < this.length; i++) {
		  for (let j = 0; j < this[i].length; j++) {
			this[i][j].draw(p);
		  }
		}
	}

	getMaxColumnNum() : number {
		let maxColumnNum : number = 0;
		for (let i = 0; i < this.length; i++) {
			if(maxColumnNum < this[i].length) {
				maxColumnNum = this[i].length;
			}
		}
		return maxColumnNum;
	}

  getGoalId() : number {
    return this.flat().findIndex((square) => square.kind == "isGoal");
  }

  getStartId() : number {
    return this.flat().findIndex((square) => square.kind == "isStart");
  }

  updateSearchedStatusBy(searchedIds : Set<number>) : void {
    this.searchedIds = searchedIds;
    for(let i = 0; i < this.length; i++) {
      for(let j = 0; j < this[i].length; j++) {
        if(searchedIds.has(this[i][j].id)) {
          this[i][j].isSearched = true;
        }
      }
    }
  }

  updateShortestPathBy(shortestPathIds : Array<number>) : void {
    for(let i = 0; i < this.length; i++) {
      for(let j = 0; j < this[i].length; j++) {
        if(shortestPathIds.includes(this[i][j].id) && this[i][j].kind != "isStart" && this[i][j].kind != "isGoal") {
          this[i][j].kind = "isOnSolutionPath";
        }
      }
    }
  }

}
