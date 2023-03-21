import { Vec2D } from './Vec2D';
export const INITIAL_POSITION_VEC_2D = new Vec2D(2, 0)
export const WALL_CODE = 1;
export const FIXED_BLOCK_CODE = 2;
export const HOW_MANY_SHAPES = 2
export const SHAPE_CODE_OF_SHAPE_S = 0;
export const SHAPE_CODE_OF_SHAPE_T = 1;
export const CELL_SIZE = 1 / 20;
export const FIELD_WIDTH = 7;
export const FIELD_HEIGHT = 12;
export const CANVAS_WIDTH : number = 4 / 5;
export const CANVAS_HEIGHT : number = 4 / 5;
export const FPS_PER_SECOND = 3;
export const getCanvasWidth: (s: any) => number = (s: any) => {
  return s.windowWidth * CANVAS_WIDTH;
};

export const getCanvasHeight: (s: any) => number = (s: any) => {
  return s.windowWidth * CANVAS_HEIGHT;
};

export const getXOriginForDrawing: (s: any) => number = (s: any) => {
  return (s.windowWidth * CANVAS_WIDTH / 2) - s.windowWidth * CELL_SIZE * FIELD_WIDTH / 2;
}

export const getYOriginForDrawing: (s: any) => number = (s: any) => {
  return s.windowWidth * (CANVAS_HEIGHT - (CELL_SIZE * FIELD_HEIGHT)) / 2;
}
