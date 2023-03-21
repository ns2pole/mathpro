import * as p5 from "p5";
import { INITIAL_POSITION_VEC_2D } from "./calc/Constants";
import { Field } from "./calc/Field";
import { FourPiece } from "./calc/FourPiece";
import { ShapeS } from "./calc/ShapeS";

export class ViewManager {
  public static controllingFourPiece : FourPiece = new FourPiece(FourPiece.getShapeRandomly(), INITIAL_POSITION_VEC_2D);

  public static timeElapse(p:p5): () => void {
    return () => {
      let virtualFourPiece : FourPiece = ViewManager.controllingFourPiece.moveDown();
      if (virtualFourPiece.canPlaceTo(Field.map)) {
        ViewManager.controllingFourPiece = virtualFourPiece;
      } else {
        Field.map = Field.place(this.controllingFourPiece, Field.map);
        ViewManager.controllingFourPiece = new FourPiece(FourPiece.getShapeRandomly(), INITIAL_POSITION_VEC_2D);
      }
      p.background(Field.backGroundColor);
      const walls = Field.getWalls();
      for (let i = 0; i < walls.length; i++) {
          walls[i].draw(p);
      }
      const blocks = Field.getFixedBlocks();
      for (let i = 0; i < blocks.length; i++) {
          blocks[i].draw(p);
      }
      ViewManager.controllingFourPiece.draw(p);
    }
  }
}
