import { getNumsIncludedIn } from './FunctionModule';
import { Plane } from './Plane';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Vertex } from './Vertex';
import { isInside } from './FunctionModule';
import { Square } from './Square';
import { Labyrinth2D } from './Labyrinth2D';

describe('BreadthFirstSearchComponent', () => {

  describe('UnitTest', () => {
    const lab1 : Labyrinth2D = new Labyrinth2D();
    lab1[0] = [new Square(0, 0, 0, "isObstacle"), new Square(1, 0, 1, "isStart"), new Square(2, 0, 2, "isVacant"), new Square(3, 0 , 3, "isVacant")],
    lab1[1] = [new Square(1, 1, 0, "isObstacle"), new Square(5, 1, 1, "isVacant"), new Square(6, 1, 2, "isVacant"), new Square(7, 1, 3, "isVacant")],
    lab1[2] = [new Square(5, 2, 0, "isObstacle"), new Square(9, 2, 1, "isObstacle"), new Square(10, 2, 2, "isVacant"), new Square(11, 2, 3, "isGoal")],
    lab1[3] = [new Square(9, 3, 0, "isObstacle"), new Square(10, 3, 1, "isObstacle"), new Square(14, 3, 2, "isVacant"), new Square(15, 3, 3, "isVacant")]

    const lab2 : Labyrinth2D = new Labyrinth2D();
    lab2[0] = [new Square(0, 0, 0, "isStart"), new Square(1, 0, 1, "isVacant")],
    lab2[1] = [new Square(2, 1, 0, "isObstacle"), new Square(3, 1, 1, "isGoal")]

    const lab3 : Labyrinth2D = new Labyrinth2D();
    lab3[0] = [new Square(0, 0, 0, "isStart"), new Square(1, 0, 1, "isVacant"), new Square(2, 0, 2, "isVacant")],
    lab3[1] = [new Square(3, 1, 0, "isObstacle"), new Square(4, 1, 1, "isVacant"), new Square(5, 1, 2, "isVacant")]
    lab3[2] = [new Square(6, 2, 0, "isObstacle"), new Square(7, 2, 1, "isGoal"), new Square(8, 2, 2, "isObstacle")]

    const lab4 : Labyrinth2D = new Labyrinth2D();
    lab4[0] = [new Square(0, 0, 0, "isStart"), new Square(1, 0, 1, "isVacant"), new Square(2, 0, 2, "isObstacle")],
    lab4[1] = [new Square(3, 1, 0, "isObstacle"), new Square(4, 1, 1, "isVacant"), new Square(5, 1, 2, "isObstacle")]
    lab4[2] = [new Square(6, 2, 0, "isObstacle"), new Square(7, 2, 1, "isVacant"), new Square(8, 2, 2, "isGoal")]

    const lab5 : Labyrinth2D = new Labyrinth2D();
    lab5[0] = [new Square(0, 0, 0, "isObstacle"), new Square(1, 0, 1, "isVacant"), new Square(2, 0, 2, "isVacant"), new Square(3, 0 , 3, "isVacant")],
    lab5[1] = [new Square(1, 1, 0, "isStart"), new Square(5, 1, 1, "isVacant"), new Square(6, 1, 2, "isObstacle"), new Square(7, 1, 3, "isVacant")],
    lab5[2] = [new Square(5, 2, 0, "isObstacle"), new Square(9, 2, 1, "isObstacle"), new Square(10, 2, 2, "isObstacle"), new Square(11, 2, 3, "isVacant")],
    lab5[3] = [new Square(9, 3, 0, "isGoal"), new Square(10, 3, 1, "isVacant"), new Square(14, 3, 2, "isVacant"), new Square(15, 3, 3, "isVacant")]


    const ad1 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab1);
    const ad2 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab2);
    const ad3 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab3);
    const ad4 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab4);
    const ad5 : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab5);


    const p1 = new Plane(lab1, ad1);
    const p2 = new Plane(lab2, ad2);
    const p3 = new Plane(lab3, ad3);
    const p4 = new Plane(lab4, ad4);
    const p5 = new Plane(lab5, ad5);

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

    test('vertex.getIdsIncludedIn', () => {
      const set : Set<Array<number>> = new Set([[1, 2], [1, 5]]);
      const actual : Set<number> = getNumsIncludedIn(set);
      expect(actual).toEqual(new Set([1, 2, 5]));
    })
    test('plane.getFastestPathTo', () => {
      const actual1 : Array<number> = p2.getFastestPathTo(0, 3);
      expect(actual1).toEqual([0, 1, 3]);
      const actual2 : Array<number> = p3.getFastestPathTo(0, 7);
      expect(actual2).toEqual([0, 1, 4, 7]);
    });

    test('plane.breadthFirstSearch', () => {
      const actual1 : Array<number> = p4.breadthFirstSearch();
      expect(actual1).toEqual([0, 1, 4, 7 , 8]);
      const actual2 : Array<number> = p5.breadthFirstSearch();
      expect(actual2).toEqual([4, 5, 1, 2, 3, 7, 11, 15, 14, 13, 12]);
    });
  });
});
