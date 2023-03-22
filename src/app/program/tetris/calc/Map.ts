import { Block } from './Block';
import { FourPiece } from './FourPiece';
import { Wall } from './Wall';
import {FIELD_WIDTH, FIELD_HEIGHT} from './Constants';
import { Vec2D } from './Vec2D';
import { CELL_STATUS } from './Union';
export class Map {
    public static getMap() : CELL_STATUS[][] {
      let map : CELL_STATUS[][] = new Array<Array<CELL_STATUS>>();
      for(let i = 0; i < FIELD_HEIGHT; i++) {
        map.push(Map.getEmptyLine());
      }
      map.push(Map.getBottomLine());
      return map;
    }

    private static getEmptyLine() : CELL_STATUS[] {
      let line : CELL_STATUS[] = [];
      line.push("WALL");
      for(let i = 0; i < FIELD_WIDTH; i++) {
        line.push("EMPTY");
      }
      line.push("WALL");
      return line;
    }

    public static getBottomLine() : CELL_STATUS[] {
      let line : CELL_STATUS[] = [];
      line.push("WALL");
      for(let i = 0; i < FIELD_WIDTH; i++) {
        line.push("WALL");
      }
      line.push("WALL");
      return line;
    }

    public static getFilledLine() : CELL_STATUS[] {
      let line : CELL_STATUS[] = [];
      line.push("WALL");
      for(let i = 0; i < FIELD_WIDTH; i++) {
        line.push("FIXED_BLOCK");
      }
      line.push("WALL");
      return line;
    }

    public static getFixedBlocksOf(map : CELL_STATUS[][]): Block[] {
        const blocks: Block[] = [];
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                if (map[y][x] === "FIXED_BLOCK") {
                    blocks.push(new Block(new Vec2D(x, y), true));
                }
            }
        }
        return blocks;
    }

    public static getWallsOf(map : CELL_STATUS[][]): Wall[] {
        const walls: Wall[] = [];
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                if (map[y][x] === "WALL") {
                    walls.push(new Wall(new Vec2D(x, y)));
                }
            }
        }
        return walls;
    }

    public static isGameOver(map: CELL_STATUS[][]): boolean {
      for(let i = 0; i < map[0].length; i++) {
        if(map[0][i] == "FIXED_BLOCK") {
          return true;
        }
      }
      return false;
    }


    private static isFilled(line : CELL_STATUS[]) : boolean {
      const filledLine: CELL_STATUS[] = Map.getFilledLine();
      for(let i = 0; i < line.length; i++) {
        if(line[i] != filledLine[i]) {
          return false;
        }
      }
      return true;
    }

    public static place(fourPiece: FourPiece, map: CELL_STATUS[][]): CELL_STATUS[][]{
      for(let i = 0; i < fourPiece.blocks.length; i++) {
        map[fourPiece.blocks[i].position.y][fourPiece.blocks[i].position.x] = "FIXED_BLOCK";
      }
      for(let i = 0; i < map.length; i++) {
        if(Map.isFilled(map[i])) {
          map.splice(i, 1);
          map.unshift(Map.getEmptyLine());
        }
      }
      return map;
    }
}
