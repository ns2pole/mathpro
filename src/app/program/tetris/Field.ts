import * as p5 from 'p5';
import { Block } from './Block';
import { FourPiece } from './FourPiece';
import { Wall } from './Wall';
import { Vec2D } from './Vec2D';
import { FIXED_BLOCK_CODE, WALL_CODE } from './Constants';
import { Color } from '../Union';
import { ShapeS } from './ShapeS';
import { INITIAL_POSITION_VEC_2D } from './Constants';
export class Field {
    public static map: number[][] = [
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1],
  ];
    public static backGroundColor : Color = 'White';
    public static getWidth(): number {
        return Field.map[0].length;
    }

    public static getDepth(): number {
        return Field.map.length;
    }

    public static getBlocks(): Block[] {
        const blocks: Block[] = [];
        for (let y = 0; y < Field.map.length; y++) {
            for (let x = 0; x < Field.map[y].length; x++) {
                if (Field.map[y][x] === FIXED_BLOCK_CODE) {
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
                if (Field.map[y][x] === WALL_CODE) {
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

        const blocks = this.getBlocks();
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].draw(p);
        }


      }
    }


    public static place(fourPiece: FourPiece): void {
        for (let i = 0; i < fourPiece.blocks.length; i++) {
            Field.map[fourPiece.blocks[i].position.y][fourPiece.blocks[i].position.x] = FIXED_BLOCK_CODE;
        }
    }



}
