import { Labyrinth2D } from './Labyrinth2D';
import { Color } from './Union';
import { Square } from './Square';
export const CANVAS_WIDTH : number = 1 / 2;
export const CANVAS_HEIGHT : number = 1 / 2;
export const CANVAS_BACKGROUND_COLOR : Color = 'Red';


export const getCanvasWidth: (s: any) => number = (s: any) => {
  return s.windowWidth * CANVAS_WIDTH;
};

export const getCanvasHeight: (s: any) => number = (s: any) => { 
  return s.windowWidth * CANVAS_HEIGHT;
};

export const getXOriginForDrawing: (s: any) => number = (s: any) => { 
  return s.windowWidth * (CANVAS_WIDTH - (Labyrinth2D.rowNum * Square.size)) / 2;
}
export const getYOriginForDrawing: (s: any) => number = (s: any) => { 
  return s.windowWidth * (CANVAS_WIDTH - (Labyrinth2D.rowNum * Square.size)) / 2;
}
export const getLeftTopCorner : (s: any, row: number, column: number) => [number, number] = (s :any, row : number, column : number) => {
  return [
    Square.getSize(s) * column + getXOriginForDrawing(s),
    Square.getSize(s) * row + getYOriginForDrawing(s)
  ];
}