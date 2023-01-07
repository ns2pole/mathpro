import { Plane } from './Plane';
import { IsAdjacent } from './Union';
import { isInside } from './FunctionModule';
import { Labyrinth2D } from './Labyrinth2D';

describe('BreadthFirstSearchComponent', () => {

  describe('PlaneClassのテスト', () => {
    let map : Labyrinth2D = new Labyrinth2D();
    map[0] = ["isObstacle", "isStart", "isVacant", "isVacant"],
    map[1] = ["isObstacle", "isVacant", "isVacant", "isVacant"],
    map[2] = ["isObstacle", "isObstacle", "isVacant", "isGoal"],
    map[3] = ["isObstacle", "isObstacle", "isVacant", "isVacant"]

    test('Plane.getIdCount', () => {
      let count : number = Plane.getIdCount(map);
      expect(count).toBe(10);
    });

    test('Plane.getCountOfObstaclesUntil', () => {
      let count1 : number = map.getCountOfObstaclesUntil(2, 2);
      expect(count1).toBe(4);
      let count2 : number = map.getCountOfObstaclesUntil(3, 3);
      expect(count2).toBe(6);
    });

    test('Labirinth2D.getVertexIdsFor', () => {
      let id1 : number = map.getVertexIdOf(0, 1);
      expect(id1).toBe(0);
      let id2 : number = map.getVertexIdOf(2, 2);
      expect(id2).toBe(6);
    });

    test('Plane.toRowColumnFor', () => {
      let rowCloumn2 : [Number, Number] = Plane.toRowColumnFor(map, 0);
      expect(rowCloumn2).toEqual([0, 1]);
      // let rowCloumn1 : [Number, Number] = Plane.toRowColumnFor(map, 4);
      // expect(rowCloumn1).toEqual([1, 2]);
      let rowCloumn3 : [Number, Number] = Plane.toRowColumnFor(map, 9);
      expect(rowCloumn3).toEqual([3, 3]);
    });

    test('isInside', () => {
      expect(isInside(map, 0, 0)).toEqual(false);
      expect(isInside(map, 1, 1)).toEqual(true);
    });

    test('Plane.getAdjacentMatrix', () => {
      let ad : Array<Array<IsAdjacent>> = Plane.getAdjacentMatrix(map);
      expect(ad).toEqual([]);
    });
  });
});
