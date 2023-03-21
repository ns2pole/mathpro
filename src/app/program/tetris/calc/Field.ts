import * as p5 from 'p5';
import { Block } from './Block';
import { FourPiece } from './FourPiece';
import { Wall } from './Wall';
import { Vec2D } from './Vec2D';
import { Color } from '../../Union';
import { CELL_STATUS } from './Union';
export class Field {
    public static map: CELL_STATUS[][] = Field.getMap();
    public static backGroundColor : Color = 'White';
    public static getMap() : CELL_STATUS[][] {
      return [["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"],
      ["WALL","WALL","WALL","WALL","WALL","WALL","WALL","WALL","WALL"]];
    }

    public static getWidth(): number {
        return Field.map[0].length;
    }

    public static getDepth(): number {
        return Field.map.length;
    }

    public static getFixedBlocks(): Block[] {
        const blocks: Block[] = [];
        for (let y = 0; y < Field.map.length; y++) {
            for (let x = 0; x < Field.map[y].length; x++) {
                if (Field.map[y][x] === "FIXED_BLOCK") {
                    blocks.push(new Block(new Vec2D(x, y)));
                }
            }
        }
        return blocks;
    }

    public static getWalls(): Wall[] {
        const walls: Wall[] = [];
        for (let y = 0; y < Field.map.length; y++) {
            for (let x = 0; x < Field.map[y].length; x++) {
                if (Field.map[y][x] === "WALL") {
                    walls.push(new Wall(new Vec2D(x, y)));
                }
            }
        }
        return walls;
    }

    public static draw(p: p5): () => void {
      return () => {
        p.background(Field.backGroundColor);
        const walls = this.getWalls();
        for (let i = 0; i < walls.length; i++) {
            walls[i].draw(p);
        }

        const blocks = this.getFixedBlocks();
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].draw(p);
        }
      }
    }

    public static place(fourPiece: FourPiece, map: CELL_STATUS[][]): CELL_STATUS[][]{
      for(let i = 0; i < fourPiece.blocks.length; i++) {
        map[fourPiece.blocks[i].position.y][fourPiece.blocks[i].position.x] = "FIXED_BLOCK";
      }
      return map;
    }
}
