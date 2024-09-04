import { Vec2D } from './Vec2D';
export const INITIAL_POSITION_VEC_2D = new Vec2D(2, 0)
export const INITIAL_ROTATION = 0;
export const WALL_CODE = 1;
export const FIXED_BLOCK_CODE = 2;
export const HOW_MANY_SHAPES = 7;
export const SHAPE_CODE_OF_SHAPE_S = 0;
export const SHAPE_CODE_OF_SHAPE_T = 1;
export const SHAPE_CODE_OF_SHAPE_Z = 2;
export const SHAPE_CODE_OF_SHAPE_L = 3;
export const SHAPE_CODE_OF_SHAPE_J = 4;
export const SHAPE_CODE_OF_SHAPE_I = 5;
export const SHAPE_CODE_OF_SHAPE_O = 6;
export const CELL_SIZE = 1 / 20;
export const CELL_SIZE_FOR_PC = 1 / 40;
export const FIELD_WIDTH = 6;
export const FIELD_HEIGHT = 12;
export const FIELD_WIDTH_INCLUDING_WALL = FIELD_WIDTH + 2;
export const CANVAS_WIDTH : number = 4 / 5;
export const CANVAS_HEIGHT : number = 4 / 5;
export const CANVAS_WIDTH_FOR_PC : number = 2 / 5;
export const CANVAS_HEIGHT_FOR_PC : number = 2 / 5;
export const FPS_PER_SECOND = 1;
export const getCanvasWidth: (s: any) => number = (s: any) => {
  return screen.width * CANVAS_WIDTH_FOR_PC;
};

export const getCanvasHeight: (s: any) => number = (s: any) => {
  return screen.width * CANVAS_HEIGHT_FOR_PC;
};

export const getXOriginForDrawing: (s: any) => number = (s: any) => {
  return (screen.width * CANVAS_WIDTH_FOR_PC / 2) - screen.width * CELL_SIZE_FOR_PC * FIELD_WIDTH_INCLUDING_WALL / 2;
}

export const getYOriginForDrawing: (s: any) => number = (s: any) => {
  return screen.width * (CANVAS_HEIGHT_FOR_PC - (CELL_SIZE_FOR_PC * FIELD_HEIGHT)) / 2;
}
