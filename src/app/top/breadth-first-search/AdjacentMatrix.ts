import { NotObstacle } from './NotObstacle';
import { Color, IsAdjacent, Space } from './Type';
export class AdjacentMatrix extends Array<Array<IsAdjacent>> {
    constructor() {
        super();
    }
    setValFor(map : Array<Array<Space>>, row: number, column: number): void {
    }
}
