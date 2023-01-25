import { getRandomInt } from './FunctionModule';
import { Square } from './Square';
import * as p5 from 'p5';
export class Labyrinth2D extends Array<Array<Square>> {
	static rowNum : number = 50;
	static columnNum : number = 50;
	static obstaclesNum : number = Labyrinth2D.rowNum * Labyrinth2D.columnNum / 3;
	constructor() {
  	super();
	}

	static generateLabyrinth() : Labyrinth2D {
		let map : Labyrinth2D = new Labyrinth2D();
		for( let i :number = 0; i < this.rowNum; i++) {
			map[i] = new Array(this.columnNum);
			for( let j :number = 0; j < this.columnNum; j++) {
				map[i][j] = new Square(i * this.rowNum + this.columnNum, i, j, "isVacant");
			}
		}
		for( let i :number = 0; i < this.obstaclesNum; i++) {
			map[getRandomInt(0, this.rowNum)][getRandomInt(0, this.columnNum)].kind = "isObstacle";
		}
		map[getRandomInt(0, this.rowNum)][getRandomInt(0, this.columnNum)].kind =  "isStart"
		map[getRandomInt(0, this.rowNum)][getRandomInt(0, this.columnNum)].kind = "isGoal"
		return map;
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
	// solveByBreadthFirstSearch() : Array<number> {
	// 	let start : number = this.flat().findIndex((square) => square.kind == "isStart");
	// 	let goal : number = this.flat().findIndex((square) => square.kind == "isGoal");
	// 	let path : Array<number> = Vertex.breadthFirstSearch(start, goal, this);
	// 	return path;
	// }

	// getAllSolutionsByBreadthFirstSearch() : Set<Array<number>> {
	// 	let start : number = this.flat().findIndex((square) => square.kind == "isStart");
	// 	let goal : number = this.flat().findIndex((square) => square.kind == "isGoal");
	// 	let paths : Set<Array<number>> = Vertex.getAllFastestPathsByBreadFirstlyPathTo(start, goal, this);
	// 	return paths;
	// }

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


	//breadFirstSearchでidのリストを受け取り、そのidのリストに対応するsquareを塗る
  //numberってなんだよ。おい。型つけろよ。
	drawSolution(p: p5, path : Array<number>): void {
		for (let i = 0; i < path.length; i++) {
			let [row, column] = this.getRowColumnOf(path[i]);
			this[row][column].drawForSolution(p);
		}
	}


}
