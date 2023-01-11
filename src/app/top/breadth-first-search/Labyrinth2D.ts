import { getRandomInt } from './FunctionModule';
import { Square } from './Square';
import { Vertex } from './Vertex';
export class Labyrinth2D extends Array<Array<Square>> {
	static rowNum : number = 12;
	static columnNum : number = 12;
	static obstaclesNum : number = 20;
	constructor() {
    super();
  }

	static generateLabyrinth() : Labyrinth2D {
		let map : Labyrinth2D = new Labyrinth2D();
		for( let i :number = 0; i < this.rowNum; i++) {
			map[i] = new Array(this.columnNum);
			for( let j :number = 0; j < this.columnNum; j++) {
				map[i][j] = new Square(i * this.rowNum + this.columnNum, "isVacant");
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
	getRowColumnOf(vertexId : number) : [Number, Number] {
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

	solveByBreadthFirstSearch() : Array<number> {
		let start : number = this.flat().findIndex((square) => square.kind == "isStart");
		let goal : number = this.flat().findIndex((square) => square.kind == "isGoal");
		let path : Array<number> = Vertex.breadthFirstSearch(start, goal, this);
		return path;
	}

	getAllSolutionsByBreadthFirstSearch() : Set<Array<number>> {
		let start : number = this.flat().findIndex((square) => square.kind == "isStart");
		let goal : number = this.flat().findIndex((square) => square.kind == "isGoal");
		let paths : Set<Array<number>> = Vertex.getAllFastestPathsByBreadFirstlyPathTo(start, goal, this);
		return paths;
	}
}
