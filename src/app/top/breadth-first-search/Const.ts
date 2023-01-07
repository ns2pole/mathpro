import { Color } from './Union';
export const CANVAS_WIDTH : number = 1 / 2;
export const CANVAS_HEIGHT : number = 1 / 2;
export const CANVAS_BACKGROUND_COLOR : Color = 'Red';
export const SQUARE_SIZE : number = 1 / 30;
export const LABYRINTH_ROW_NUM : number = 12;
export const LABYRINTH_COLUMN_NUM : number = 12;
export const OBSTACLE_NUM : number = 30;

export const getSquareSize: (arg: any) => number = (s: any) => { 
  return s.windowWidth * SQUARE_SIZE;
};

export const getCanvasWidth: (arg: any) => number = (s: any) => {
  return s.windowWidth * CANVAS_WIDTH;
};

export const getCanvasHeight: (arg: any) => number = (s: any) => { 
  return s.windowWidth * CANVAS_HEIGHT;
};

export const getXOriginForDrawing: (arg: any) => number = (s: any) => { 
  return s.windowWidth * (CANVAS_WIDTH - (LABYRINTH_ROW_NUM * SQUARE_SIZE)) / 2;
}
export const getYOriginForDrawing: (arg: any) => number = (s: any) => { 
  return s.windowWidth * (CANVAS_WIDTH - (LABYRINTH_ROW_NUM * SQUARE_SIZE)) / 2;
}
