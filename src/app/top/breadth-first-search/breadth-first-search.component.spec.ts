import { Plane } from './Plane';
import { IsAdjacent } from './Union';
import { isInside } from './FunctionModule';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';

describe('BreadthFirstSearchComponent', () => {

  describe('UnitTest', () => {
    let lab : Labyrinth2D = new Labyrinth2D();
    lab[0] = ["isObstacle", "isStart", "isVacant", "isVacant"],
    lab[1] = ["isObstacle", "isVacant", "isVacant", "isVacant"],
    lab[2] = ["isObstacle", "isObstacle", "isVacant", "isGoal"],
    lab[3] = ["isObstacle", "isObstacle", "isVacant", "isVacant"]

    test('labirinth2D.getIdCount', () => {
      let count : number = lab.getIdCount();
      expect(count).toBe(16);
    });

    test('labirinth2D.getVertexIdsFor', () => {
      let id1 : number = lab.getVertexIdOf(0, 1);
      expect(id1).toBe(1);
      let id2 : number = lab.getVertexIdOf(2, 2);
      expect(id2).toBe(10);
    });

    test('labirinth2D.getRowColumnOf', () => {
      let rowCloumn1 : [Number, Number] = lab.getRowColumnOf(0);
      expect(rowCloumn1).toEqual([0, 0]);
      let rowCloumn2 : [Number, Number] = lab.getRowColumnOf(5);
      expect(rowCloumn2).toEqual([1, 1]);
      let rowCloumn3 : [Number, Number] = lab.getRowColumnOf(9);
      expect(rowCloumn3).toEqual([2, 1]);
    });

    test('isInside', () => {
      expect(isInside(lab, 0, 0)).toEqual(false);
      expect(isInside(lab, 1, 1)).toEqual(true);
    });

    test('AdjacentMatrix.getAdjacentMatrixFor', () => {
      let ad : Array<Array<IsAdjacent>> = AdjacentMatrix.getAdjacentMatrixFor(lab);
      expect(ad).toEqual([]);
    });
  });
});
