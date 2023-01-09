import { IsAdjacent } from './Union';
import { isInside } from './FunctionModule';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Vertex } from './Vertex';

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

    const ad1 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab1);
    const ad2 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab2);
    const ad3 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab3);

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
      expect(ad1[0]).toEqual(
        [ "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent",
          "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent",
          "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent",
          "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"
        ]
      );
      expect(ad1[1]).toEqual(
        [ "NotAdjacent", "NotAdjacent", "Adjacent", "NotAdjacent",
          "NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent",
          "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent",
          "NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"
        ]
      );
      expect(ad2).toEqual(
        [
          ["NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent"],
          ["Adjacent", "NotAdjacent", "NotAdjacent", "Adjacent"],
          ["NotAdjacent", "NotAdjacent", "NotAdjacent", "NotAdjacent"],
          ["NotAdjacent", "Adjacent", "NotAdjacent", "NotAdjacent"],
        ]
      );
      expect(ad3).toEqual(
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

    test('vertex.getAdjacentVertexIdsBy(ad)', () => {
      const v1 : Vertex = new Vertex(5);
      const ids1 : Array<number> = v1.getAdjacentVertexIdsBy(ad1);
      expect(ids1).toEqual([1, 6]);
      const v2 : Vertex = new Vertex(0);
      const ids2 : Array<number> = v2.getAdjacentVertexIdsBy(ad2);
      expect(ids2).toEqual([1]);
      const v3 : Vertex = new Vertex(3);
      const ids3 : Array<number> = v3.getAdjacentVertexIdsBy(ad3);
      expect(ids3).toEqual([]);
      const v1_2 : Vertex = new Vertex(1);
      const ids1_2 : Array<number> = v1_2.getAdjacentVertexIdsBy(ad1);
      expect(ids1_2).toEqual([2, 5]);
      
    });



    test('vertex.evolute', () => {
      const pair : Array<[number, Array<number>]> = [[1, [1]]]
      const actual : Array<[number, Array<number>]> = Vertex.evolute(pair, ad1);
      expect(actual).toEqual([[1, [2, 5]]]);
    });

  });
});
