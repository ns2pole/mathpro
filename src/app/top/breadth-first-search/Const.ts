import { Labyrinth2D } from './Labyrinth2D';
import { Color } from './Union';
import { Square } from './Square';
export const CANVAS_WIDTH : number = 1 / 2;
export const CANVAS_HEIGHT : number = 1 / 2;
export const CANVAS_BACKGROUND_COLOR : Color = 'Red';


export const getCanvasWidth: (arg: any) => number = (s: any) => {
  return s.windowWidth * CANVAS_WIDTH;
};

export const getCanvasHeight: (arg: any) => number = (s: any) => { 
  return s.windowWidth * CANVAS_HEIGHT;
};

export const getXOriginForDrawing: (arg: any) => number = (s: any) => { 
  return s.windowWidth * (CANVAS_WIDTH - (Labyrinth2D.rowNum * Square.size)) / 2;
}
export const getYOriginForDrawing: (arg: any) => number = (s: any) => { 
  return s.windowWidth * (CANVAS_WIDTH - (Labyrinth2D.rowNum * Square.size)) / 2;
}
