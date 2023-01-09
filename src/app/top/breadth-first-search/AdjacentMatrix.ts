import { Labyrinth2D } from './Labyrinth2D';
import { IsAdjacent} from './Union';
import { isInside, isBottomSide, isTopSide, isLeftSide, isRightSide, isCorner, isTopLeftCorner, isTopRightCorner, isBottomLeftCorner, isBottomRightCorner } from './FunctionModule';


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
				adjacentMatrix.setAdjacentInfoFor(lab, i, j);
			}
		}
		return adjacentMatrix;
	}

	setAdjacentInfoFor(map : Labyrinth2D, row: number, column: number): void {
		if(isTopSide(map, row, column) && !isCorner(map, row, column) && map[row][column] == "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column + 1)] = "NotAdjacent";
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column + 1)] = "NotAdjacent";			
		}
		if(isInside(map, row, column) && map[row][column] != "isObstacle") {
			
		}
	}

	// setAdjacentInfoForEveryDirection(map : Labyrinth2D, row: number, column: number): void {
	setAdjacentInfoForAbove(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column] == "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "NotAdjacent";
		} else {
			if(map[row][column + 1] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column + 1)] = "Adjacent";
				this[map.getVertexIdOf(row, column + 1)][map.getVertexIdOf(row, column)] = "Adjacent";
			}
		}
	}
	setAdjacentInfoForBelow(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column] == "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "NotAdjacent";
		} else {
			if(map[row][column - 1] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column - 1)] = "Adjacent";
				this[map.getVertexIdOf(row, column - 1)][map.getVertexIdOf(row, column)] = "Adjacent";
			}
		}
	}

	setAdjacentInfoForLeft(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column] == "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "NotAdjacent";
		} else {
			if(map[row - 1][column] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row - 1, column)] = "Adjacent";
				this[map.getVertexIdOf(row - 1, column)][map.getVertexIdOf(row, column)] = "Adjacent";
			}	
		}
	}

	setAdjacentInfoForRight(map : Labyrinth2D, row: number, column: number): void {
		if(map[row][column] == "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "NotAdjacent";
		} else {
			if(map[row + 1][column] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "Adjacent";
				this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "Adjacent";
			}
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
