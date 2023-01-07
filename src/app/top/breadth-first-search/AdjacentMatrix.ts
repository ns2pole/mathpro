import { Labyrinth2D } from './Labyrinth2D';
import { IsAdjacent} from './Union';
import { isInside } from './FunctionModule';
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
		if(isInside(map, row, column) && map[row][column] == "isObstacle") {
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column + 1)] = "NotAdjacent";
			this[map.getVertexIdOf(row, column + 1)][map.getVertexIdOf(row, column)] = "NotAdjacent";		
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column - 1)] = "NotAdjacent";
			this[map.getVertexIdOf(row, column - 1)][map.getVertexIdOf(row, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row - 1, column)] = "NotAdjacent";
			this[map.getVertexIdOf(row - 1, column)][map.getVertexIdOf(row, column)] = "NotAdjacent";
		} 
		if(isInside(map, row, column) && map[row][column] != "isObstacle") {
			if(map[row][column + 1] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column + 1)] = "Adjacent";
				this[map.getVertexIdOf(row, column + 1)][map.getVertexIdOf(row, column)] = "Adjacent";
			}
			if(map[row][column - 1] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row, column - 1)] = "Adjacent";
				this[map.getVertexIdOf(row, column - 1)][map.getVertexIdOf(row, column)] = "Adjacent";
			}
			if(map[row + 1][column] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row + 1, column)] = "Adjacent";
				this[map.getVertexIdOf(row + 1, column)][map.getVertexIdOf(row, column)] = "Adjacent";
			}
			if(map[row - 1][column] != "isObstacle") {
				this[map.getVertexIdOf(row, column)][map.getVertexIdOf(row - 1, column)] = "Adjacent";
				this[map.getVertexIdOf(row - 1, column)][map.getVertexIdOf(row, column)] = "Adjacent";
			}
		}
	}
}
