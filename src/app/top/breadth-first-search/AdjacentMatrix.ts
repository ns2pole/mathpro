import { Labyrinth2D } from './Labyrinth2D';
import { Color, IsAdjacent, Space } from './Union';
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
				// if(isInside(map, i, j)) {
				//   if(map[i][j] != "isObstacle" && map[i][j + 1] != "isObstacle") {
				//     adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i, j + 1)] = "Adjacent";
				//     adjacentMatrix[map.getVertexIdOf(i, j + 1)][map.getVertexIdOf(i, j)] = "Adjacent";
				//   }
				//   if(map[i][j] != "isObstacle" && map[i][j - 1] != "isObstacle") {
				//     adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i, j - 1)] = "Adjacent";
				//     adjacentMatrix[map.getVertexIdOf(i, j - 1)][map.getVertexIdOf(i, j)] = "Adjacent";
				//   }
				//   if(map[i][j] != "isObstacle" && map[i + 1][j] != "isObstacle") {
				//     adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i + 1, j)] = "Adjacent";
				//     adjacentMatrix[map.getVertexIdOf(i + 1, j)][map.getVertexIdOf(i, j)] = "Adjacent";
				//   }
				//   if(map[i][j] != "isObstacle" && map[i - 1][j] != "isObstacle") {
				//     adjacentMatrix[map.getVertexIdOf(i, j)][map.getVertexIdOf(i - 1, j)] = "Adjacent";
				//     adjacentMatrix[map.getVertexIdOf(i - 1, j)][map.getVertexIdOf(i, j)] = "Adjacent";
				//   }
				// }
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
		} else {
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
