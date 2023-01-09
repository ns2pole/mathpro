import { IsAdjacent } from './Union';
import { isInside } from './FunctionModule';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';

describe('BreadthFirstSearchComponent', () => {

  describe('UnitTest', () => {
    const lab1 : Labyrinth2D = new Labyrinth2D();
    lab1[0] = ["isObstacle", "isStart", "isVacant", "isVacant"],
    lab1[1] = ["isObstacle", "isVacant", "isVacant", "isVacant"],
    lab1[2] = ["isObstacle", "isObstacle", "isVacant", "isGoal"],
    lab1[3] = ["isObstacle", "isObstacle", "isVacant", "isVacant"]

    const lab2 : Labyrinth2D = new Labyrinth2D();
    lab2[0] = ["isStart", "isVacant"],
    lab2[1] = ["isObstacle", "isGoal"]

    const lab3 : Labyrinth2D = new Labyrinth2D();
    lab3[0] = ["isStart", "isVacant", "isVacant"],
    lab3[1] = ["isObstacle", "isVacant", "isVacant"]
    lab3[2] = ["isObstacle", "isGoal", "isObstacle"]

    test('labirinth2D.getIdCount', () => {
      const count : number = lab1.getIdCount();
      expect(count).toBe(16);
    });

    test('labirinth2D.getVertexIdsFor', () => {
      const id1 : number = lab1.getVertexIdOf(0, 1);
      expect(id1).toBe(1);
      const id2 : number = lab1.getVertexIdOf(2, 2);
      expect(id2).toBe(10);
    });

    test('labirinth2D.getRowColumnOf', () => {
      const rowCloumn1 : [Number, Number] = lab1.getRowColumnOf(0);
      expect(rowCloumn1).toEqual([0, 0]);
      const rowCloumn2 : [Number, Number] = lab1.getRowColumnOf(5);
      expect(rowCloumn2).toEqual([1, 1]);
      const rowCloumn3 : [Number, Number] = lab1.getRowColumnOf(9);
      expect(rowCloumn3).toEqual([2, 1]);
    });

    test('isInside', () => {
      expect(isInside(lab1, 0, 0)).toEqual(false);
      expect(isInside(lab1, 1, 1)).toEqual(true);
    });

    test('adjacentMatrix.getAdjacentMatrixFor', () => {
      const ad1 : Array<Array<IsAdjacent>> = AdjacentMatrix.getAdjacentMatrixFor(lab2);
      expect(ad1).toEqual(
        [
          ["NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent"],
          ["Adjacent", "NotAdjacent", "NotAdjacent", "Adjacent"],
          ["NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent"],
        ]
      );
      const ad2 : Array<Array<IsAdjacent>> = AdjacentMatrix.getAdjacentMatrixFor(lab3);
      expect(ad2).toEqual(
        [
          ["NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["Adjacent", "NotAdjacent", "Adjacent", "NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "Adjacent", "NotAdjacent", "Adjacent", "NotAdjacent"],
          ["NotAdjacent", "NotAdjacent", "Adjacent", "NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
        ]
      );

    });
  });
});
