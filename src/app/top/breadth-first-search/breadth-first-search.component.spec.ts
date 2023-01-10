import { IsAdjacent } from './Union';
import { isInside } from './FunctionModule';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Vertex } from './Vertex';
import { Square } from './Square';

describe('BreadthFirstSearchComponent', () => {

  describe('UnitTest', () => {
    const lab1 : Labyrinth2D = new Labyrinth2D();
    lab1[0] = [new Square(1, "isObstacle"), new Square(1, "isStart"), new Square(1, "isVacant"), new Square(1, "isVacant")],
    lab1[1] = [new Square(1, "isObstacle"), new Square(1, "isVacant"), new Square(1, "isVacant"), new Square(1, "isVacant")],
    lab1[2] = [new Square(1, "isObstacle"), new Square(1, "isObstacle"), new Square(1, "isVacant"), new Square(1, "isGoal")],
    lab1[3] = [new Square(1, "isObstacle"), new Square(1, "isObstacle"), new Square(1, "isVacant"), new Square(1, "isVacant")]

    const lab2 : Labyrinth2D = new Labyrinth2D();
    lab2[0] = [new Square(1, "isStart"), new Square(1, "isVacant")],
    lab2[1] = [new Square(1, "isObstacle"), new Square(1, "isGoal")]

    const lab3 : Labyrinth2D = new Labyrinth2D();
    lab3[0] = [new Square(1, "isStart"), new Square(1, "isVacant"), new Square(1, "isVacant")],
    lab3[1] = [new Square(1, "isObstacle"), new Square(1, "isVacant"), new Square(1, "isVacant")]
    lab3[2] = [new Square(1, "isObstacle"), new Square(1, "isGoal"), new Square(1, "isObstacle")]

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
      const sequence1 : Set<Array<number>> = new Set([[1]])
      const actual1 : Set<Array<number>> = Vertex.evolute(sequence1, ad1);
      expect(actual1).toEqual(new Set([[1, 2], [1, 5]]));
      const sequence2 : Set<Array<number>> = new Set([[1, 2], [1, 5]])
      const actual2 : Set<Array<number>> = Vertex.evolute(sequence2, ad1);
      expect(actual2).toEqual(new Set([[1, 2, 3], [1, 5, 6], [1, 2, 6]]));
      const sequence3 : Set<Array<number>> = new Set([[1, 2, 3], [1, 5, 6], [1, 2, 6]])
      const actual3 : Set<Array<number>> = Vertex.evolute(sequence3, ad1);
      expect(actual3).toEqual(new Set([[1, 2, 3, 7], [1, 2, 6, 7], [1, 2, 6, 10], [1, 5, 6, 7], [1, 5, 6, 10]]));
    });

    test('vertex.getAllFastestPathsByBreadFirstlyPathTo', () => {
      const v1 : Vertex = new Vertex(1);
      const idSequences1 : Set<Array<number>> = v1.getAllFastestPathsByBreadFirstlyPathTo(11, lab1);
      expect(idSequences1).toEqual(
        new Set([
          [1, 2, 3, 7, 11],
          [1, 2, 6, 7, 11],
          [1, 2, 6, 10, 11],
          [1, 5, 6, 7, 11],
          [1, 5, 6, 10, 11]
        ]
        ));
    })
    test('vertex.getIdsIncludedIn', () => {
      const set : Set<Array<number>> = new Set([[1, 2], [1, 5]]);
      const actual : Set<number> = Vertex.getNumsIncludedIn(set);
      expect(actual).toEqual(new Set([1, 2, 5]));
    })
    test('vertex.getFastestPathTo', () => {
      const vertex1 : Vertex = new Vertex(0);
      const actual1 : Array<number> = vertex1.getFastestPathTo(3, lab2);
      expect(actual1).toEqual([0, 1, 3]);
      
      const vertex2 : Vertex = new Vertex(0);
      const actual2 : Array<number> = vertex2.getFastestPathTo(7, lab3);
      expect(actual2).toEqual([0, 1, 4, 7]);
    });
    test('Vertex.breadthFirstSearch', () => {
      const actual1 : Array<number> = Vertex.breadthFirstSearch(0, 3, lab2);
      expect(actual1).toEqual([0, 1, 3]);
      const actual2 : Array<number> = Vertex.breadthFirstSearch(0, 7, lab3);
      expect(actual2).toEqual([0, 1, 4, 7]);
    });
    test('labirinth2D.solveBreadFirstSearch', () => {
      const actual2 : Array<number> = lab2.solveByBreadthFirstSearch();
      expect(actual2).toEqual([0, 1, 3]);
      const actual3 : Array<number> = lab3.solveByBreadthFirstSearch();
      expect(actual3).toEqual([0, 1, 4, 7]);
    });})
});
