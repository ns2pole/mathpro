import { Color } from '../Union';
export const CANVAS_WIDTH : number = 4 / 5;
export const CANVAS_HEIGHT : number = 4 / 5;
export const CANVAS_WIDTH_FOR_PC : number = 2 / 5;
export const CANVAS_HEIGHT_FOR_PC : number = 2 / 5;
export const CANVAS_WIDTH_FOR_PHONE : number = 4 / 5;
export const CANVAS_HEIGHT_FOR_PHONE : number = 4 / 5;
export const CANVAS_BACKGROUND_COLOR : Color = 'White';
export const LARGE_LABYRINTH_SIZE : number = 50;
export const SQUARE_SIZE_FOR_LARGE_LABYRINTH : number = 1 / (LARGE_LABYRINTH_SIZE * 2.6);
export const SMALL_LABYRINTH_SIZE : number = 20;
export const SQUARE_SIZE_FOR_SMALL_LABYRINTH : number = 1 / (SMALL_LABYRINTH_SIZE * 1.6);

export const getCanvasWidth: (s: any) => number = (s: any) => {
  if(screen.width < 700) {
    return screen.width * CANVAS_WIDTH_FOR_PHONE;
  } else {
    return screen.width * CANVAS_WIDTH_FOR_PC;
  }
};

export const getCanvasHeight: (s: any) => number = (s: any) => {
  if(screen.width < 700) {
    return screen.width * CANVAS_HEIGHT_FOR_PHONE;
  } else {
    return screen.width * CANVAS_HEIGHT_FOR_PC;
  }
};

export const getXOriginForDrawing: (s: any) => number = (s: any) => {
  if(screen.width < 700) {
    return screen.width * (CANVAS_WIDTH_FOR_PHONE - (SMALL_LABYRINTH_SIZE * SQUARE_SIZE_FOR_SMALL_LABYRINTH)) / 2;
  } else {
    return screen.width * (CANVAS_WIDTH_FOR_PC  - (LARGE_LABYRINTH_SIZE * SQUARE_SIZE_FOR_LARGE_LABYRINTH)) / 2;
  }
}

export const getYOriginForDrawing: (s: any) => number = (s: any) => {
  if(screen.width < 700) {
    return screen.width * (CANVAS_HEIGHT_FOR_PHONE - (SMALL_LABYRINTH_SIZE * SQUARE_SIZE_FOR_SMALL_LABYRINTH)) / 2;
  } else {
    return screen.width * (CANVAS_HEIGHT_FOR_PC - (LARGE_LABYRINTH_SIZE * SQUARE_SIZE_FOR_LARGE_LABYRINTH )) / 2;
  }
}
