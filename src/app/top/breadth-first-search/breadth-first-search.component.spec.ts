import { IsAdjacent } from './IsAdjacent';
import { Plane } from './Plane';
import { Space } from './Space';

describe('BreadthFirstSearchComponent', () => {

  describe('PlaneClassのテスト', () => {
    let map : Array<Array<Space>> = [
      [Space.isObstacle, Space.isStart, Space.isVacant, Space.isVacant],
      [Space.isObstacle, Space.isVacant, Space.isVacant, Space.isVacant],
      [Space.isObstacle, Space.isObstacle, Space.isVacant, Space.isGoal],
      [Space.isObstacle, Space.isObstacle, Space.isVacant, Space.isVacant]
    ];

    test('Plane.getIdCount', () => {
      let count : number = Plane.getIdCount(map);
      expect(count).toBe(10);
    });

    test('Plane.getCountOfObstaclesUntil', () => {
      let count1 : number = Plane.getCountOfObstaclesUntil(map, 2, 2);
      expect(count1).toBe(4);
      let count2 : number = Plane.getCountOfObstaclesUntil(map, 3, 3);
      expect(count2).toBe(6);
    });

    test('Plane.getVertexIdsFor', () => {
      let id1 : number = Plane.getVertexIdsFor(map, 0, 1);
      expect(id1).toBe(0);
      let id2 : number = Plane.getVertexIdsFor(map, 2, 2);
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

    test('Plane.getAdjacentMatrix', () => {
      let ad : Array<Array<IsAdjacent>> = Plane.getAdjacentMatrix(map);
      expect(ad).toEqual([]);
    });
  });
});
