import * as p5 from "p5";
import { INITIAL_POSITION_VEC_2D, INITIAL_ROTATION } from "./calc/Constants";
import { Map } from "./calc/Map";
import { FourPiece } from "./calc/FourPiece";
import { Block } from "./calc/Block";
import { Wall } from "./calc/Wall";

export class ViewManager {
  public static controllingFourPiece : FourPiece = new FourPiece(FourPiece.getShapeRandomly(), INITIAL_POSITION_VEC_2D, INITIAL_ROTATION);
  public static map = Map.getMap();
  public static backgroundColor : string = 'White';
  public static timeElapse(p:p5): () => void {
    return () => {
      if (ViewManager.controllingFourPiece.canMoveDown(ViewManager.map)) {
        ViewManager.controllingFourPiece = ViewManager.controllingFourPiece.getFourPieceMovedDown();
      } else {
        ViewManager.map = Map.place(this.controllingFourPiece, ViewManager.map);
        ViewManager.controllingFourPiece = new FourPiece(FourPiece.getShapeRandomly(), INITIAL_POSITION_VEC_2D, INITIAL_ROTATION);
      }
      p.background(ViewManager.backgroundColor);
      ViewManager.drawMap(p)();
      ViewManager.drawFourPiece(ViewManager.controllingFourPiece, p);
    }
  }


  public static drawMap(p: p5): () => void {
    return () => {
      p.background(ViewManager.backgroundColor);
      const walls = Map.getWallsOf(ViewManager.map);
      for (let i = 0; i < walls.length; i++) {
          ViewManager.drawWall(walls[i], p);
      }

      const blocks = Map.getFixedBlocksOf(ViewManager.map);
      for (let i = 0; i < blocks.length; i++) {
          ViewManager.drawBlock(blocks[i], p);
      }
    }
  }

  public static drawWall(wall: Wall, p: p5) {
    p.fill('gray');
    p.rect(wall.getLeftTopCornerX(p), wall.getLeftTopCornerY(p), Wall.getSize(p), Wall.getSize(p));
  }

  public static drawBlock(block: Block, p: p5) {
    if(block.isFixed) {
      p.fill('blue');
    } else {
      p.fill('yellow');
    }
    p.rect(block.getLeftTopCornerX(p), block.getLeftTopCornerY(p), Block.getSize(p), Block.getSize(p));
  }


  public static drawFourPiece(fourPiece: FourPiece, p : p5) {
    for (let i = 0; i < fourPiece.blocks.length; i++) {
      ViewManager.drawBlock(fourPiece.blocks[i], p);
    }
  }

}
