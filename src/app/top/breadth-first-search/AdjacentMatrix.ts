import { Labyrinth2D } from './Labyrinth2D';
import { IsAdjacent} from './Union';
import { isInside, isTopInSide, isBottomInSide, isLeftInSide, isRightInSide, isTopLeftCorner, isTopRightCorner, isBottomLeftCorner, isBottomRightCorner } from './FunctionModule';

//行番号列番号はvertexのidに対応する
export class AdjacentMatrix extends Array<Array<IsAdjacent>> {
	constructor() {
		super();
	}

	static getAdjacentMatrixFor(lab : Labyrinth2D) : AdjacentMatrix {
		let adjacentMatrix : AdjacentMatrix = new AdjacentMatrix();
		for( let i :number = 0; i < lab.getIdCount(); i++) {
			adjacentMatrix[i] = new Array(lab.getIdCount());
		}
		for( let i :number = 0; i < lab.length; i++) {
			for( let j :number = 0; j < lab[i].length; j++) {
				if(isInside(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForInside(lab, i, j);
				}
				else if(isTopInSide(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForTopInSide(lab, i, j);
				}
				else if(isBottomInSide(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForBottomInSide(lab, i, j);
				}
				else if(isLeftInSide(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForLeftInSide(lab, i, j);
				}
				else if(isRightInSide(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForRightInSide(lab, i, j);
				}
				else if(isTopLeftCorner(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForTopLeftCorner(lab, i, j);
				}
				else if(isTopRightCorner(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForTopRightCorner(lab, i, j);
				}
				else if(isBottomLeftCorner(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForBottomLeftCorner(lab, i, j);
				}
				else if(isBottomRightCorner(lab, i, j)) {
					adjacentMatrix.setAdjacentInfoForBottomRightCorner(lab, i, j);
				}
			}
		}
		adjacentMatrix.setAdjacentInfoOtherwise();
		return adjacentMatrix;
	}

	
	setAdjacentInfoOtherwise(): void {
		for( let i :number = 0; i < this.length; i++) {
			for( let j :number = 0; j < this[i].length; j++) {
				if(this[i][j] == undefined) {
					this[i][j] = "NotAdjacent";
				}
			}
		}
	}


	setAdjacentInfoForAbove(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column].kind != "isObstacle" && map[row - 1][column].kind != "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row - 1, column)] = "Adjacent";
			this[map.getVertexIdOf(row - 1, column)][map.getVertexIdOf(row, column)] = "Adjacent";
		}
	}

	setAdjacentInfoForBelow(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column].kind != "isObstacle" && map[row + 1][column].kind != "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "Adjacent";
			this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "Adjacent";
		}
	}

	setAdjacentInfoForLeft(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column].kind != "isObstacle" && map[row][column - 1].kind != "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column - 1)] = "Adjacent";
			this[map.getVertexIdOf(row, column - 1)][map.getVertexIdOf(row, column)] = "Adjacent";
		}
	}

	setAdjacentInfoForRight(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column].kind != "isObstacle" && map[row][column + 1].kind != "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column + 1)] = "Adjacent";
			this[map.getVertexIdOf(row, column + 1)][map.getVertexIdOf(row, column)] = "Adjacent";
		}
	}

	setAdjacentInfoForTopLeftCorner(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForBelow(map, row, column);
		this.setAdjacentInfoForRight(map, row, column);
	}

	setAdjacentInfoForTopRightCorner(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForBelow(map, row, column);
		this.setAdjacentInfoForLeft(map, row, column);
	}

	setAdjacentInfoForBottomLeftCorner(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForAbove(map, row, column);
		this.setAdjacentInfoForRight(map, row, column);
	}

	setAdjacentInfoForBottomRightCorner(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForAbove(map, row, column);
		this.setAdjacentInfoForLeft(map, row, column);
	}

	setAdjacentInfoForTopInSide(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForBelow(map, row, column);
		this.setAdjacentInfoForRight(map, row, column);
		this.setAdjacentInfoForLeft(map, row, column);
	}

	setAdjacentInfoForBottomInSide(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForAbove(map, row, column);
		this.setAdjacentInfoForRight(map, row, column);
		this.setAdjacentInfoForLeft(map, row, column);
	}

	setAdjacentInfoForLeftInSide(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForAbove(map, row, column);
		this.setAdjacentInfoForBelow(map, row, column);
		this.setAdjacentInfoForRight(map, row, column);
	}

	setAdjacentInfoForRightInSide(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForAbove(map, row, column);
		this.setAdjacentInfoForBelow(map, row, column);
		this.setAdjacentInfoForLeft(map, row, column);
	}

	setAdjacentInfoForInside(map : Labyrinth2D, row: number, column: number): void {
		this.setAdjacentInfoForAbove(map, row, column);
		this.setAdjacentInfoForBelow(map, row, column);
		this.setAdjacentInfoForRight(map, row, column);
		this.setAdjacentInfoForLeft(map, row, column);
	}
}
