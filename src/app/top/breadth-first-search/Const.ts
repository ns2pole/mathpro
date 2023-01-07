import { Color } from './Union';
export class Const {
  static CANVAS_WIDTH : number = 1 / 2;
  static CANVAS_HEIGHT : number = 1 / 2;
  static CANVAS_BACKGROUND_COLOR : Color = 'Red';
  static SQUARE_SIZE : number = 1 / 30;
  static SQUARE_ROW_NUM : number = 12;
  static SQUARE_COLUMN_NUM : number = 12;
  static OBSTACLE_NUM : number = 30;

  static getSquareSize(s:any) : number { 
    return s.windowWidth * Const.SQUARE_SIZE;
  };

  static getCanvasWidth(s:any) : number { 
    return s.windowWidth * Const.CANVAS_WIDTH;
  };
  
  static getCanvasHeight(s:any) : number { 
    return s.windowWidth * Const.CANVAS_HEIGHT;
  };

  static getXOriginForDrawing(s:any) : number {
    return s.windowWidth * (Const.CANVAS_WIDTH - (Const.SQUARE_ROW_NUM * Const.SQUARE_SIZE)) / 2;
  }
  static getYOriginForDrawing(s:any) : number {
    return s.windowWidth * (Const.CANVAS_WIDTH - (Const.SQUARE_ROW_NUM * Const.SQUARE_SIZE)) / 2;
  }
}
