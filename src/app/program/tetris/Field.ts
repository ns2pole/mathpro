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
    public map: number[][];
    private backGroundColor : Color = 'White';
    private controllingFourPiece : FourPiece;

    constructor() {
        this.map = [
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
        this.controllingFourPiece = new ShapeS(INITIAL_POSITION_VEC_2D);
    }

    public getWidth(): number {
        return this.map[0].length;
    }

    public getDepth(): number {
        return this.map.length;
    }

    public getBlocks(): Block[] {
        const blocks: Block[] = [];
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === FIXED_BLOCK_CODE) {
                    blocks.push(new Block(new Vec2D(x, y)));
                }
            }
        }
        return blocks;
    }

    public getWalls(): Wall[] {
        const walls: Wall[] = [];
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === WALL_CODE) {
                    walls.push(new Wall(new Vec2D(x, y)));
                }
            }
        }
        return walls;
    }

    public draw(p: p5): () => void {
      return () => {
        p.background(this.backGroundColor);
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


    public place(fourPiece: FourPiece): void {
        for (let i = 0; i < fourPiece.blocks.length; i++) {
            this.map[fourPiece.blocks[i].position.y][fourPiece.blocks[i].position.x] = FIXED_BLOCK_CODE;
        }
    }


    public timeElapse(p:p5): () => void {
      return () => {
      this.controllingFourPiece = new ShapeS(INITIAL_POSITION_VEC_2D);
      //ここ直す
      const virtualFourPiece = this.controllingFourPiece.getInstanceMovedDown();

      if (virtualFourPiece.canBePlacedIn(this)) {
        // newしないと、controlledFourPieces.yを+1してもblocksのy座標が変わらない
        this.controllingFourPiece = virtualFourPiece;
      } else {
        this.place(this.controllingFourPiece);
        this.controllingFourPiece = new ShapeS(INITIAL_POSITION_VEC_2D);
      }
      p.background(this.backGroundColor);
      const walls = this.getWalls();
      for (let i = 0; i < walls.length; i++) {
          walls[i].draw(p);
      }
      const blocks = this.getBlocks();
      for (let i = 0; i < blocks.length; i++) {
          blocks[i].draw(p);
      }
      console.log("this.controllingFourPiece");
      this.controllingFourPiece.draw(p);
    }
  }
}
