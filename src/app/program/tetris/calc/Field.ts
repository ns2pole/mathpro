import * as p5 from 'p5';
import { Block } from './Block';
import { FourPiece } from './FourPiece';
import { Wall } from './Wall';
import {FIELD_WIDTH, FIELD_HEIGHT} from './Constants';
import { Vec2D } from './Vec2D';
import { Color } from '../../Union';
import { CELL_STATUS } from './Union';
export class Field {
    public static map: CELL_STATUS[][] = Field.getMap();
    public static backGroundColor : Color = 'White';
    public static getMap() : CELL_STATUS[][] {
      let map : CELL_STATUS[][] = new Array<Array<CELL_STATUS>>();
      for(let i = 0; i < FIELD_HEIGHT; i++) {
        map.push(Field.getEmptyLine());
      }
      map.push(Field.getBottomLine());
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

    private static isFilled(line : CELL_STATUS[] ) : boolean {
      if(line === Field.getFilledLine()) {
        return true;
      } else {
        return false;
      }
    }

    public static place(fourPiece: FourPiece, map: CELL_STATUS[][]): CELL_STATUS[][]{
      for(let i = 0; i < fourPiece.blocks.length; i++) {
        map[fourPiece.blocks[i].position.y][fourPiece.blocks[i].position.x] = "FIXED_BLOCK";
      }
      for(let i = 0; i < map.length; i++) {
        if(Field.isFilled(map[i])) {
          map.splice(i, 1);
          map.unshift(["WALL","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","WALL"]);
        }
      }
      return map;
    }
}
