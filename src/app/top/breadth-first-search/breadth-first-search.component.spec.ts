import { IsAdjacent } from './IsAdjacent';
import { Plane } from './Plane';
import { Space } from './Space';

describe('BreadthFirstSearchComponent', () => {

  describe('sampleClassのテスト', () => {
    test('sample1', () => {
      let ad : Array<Array<IsAdjacent>> = Plane.getAdjacentMatrix(
        [[Space.isObstacle, Space.isStart, Space.isVacant, Space.isVacant],
        [Space.isObstacle, Space.isVacant, Space.isVacant, Space.isVacant],
        [Space.isObstacle, Space.isObstacle, Space.isVacant, Space.isObstacle],
        [Space.isObstacle, Space.isObstacle, Space.isVacant, Space.isVacant]
        ]);
      expect(ad).toBe([]);
    });
  });
});
