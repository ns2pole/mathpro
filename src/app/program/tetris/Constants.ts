import { Vec2D } from './Vec2D';
export const INITIAL_POSITION_VEC_2D = new Vec2D(2, 1)
export const ONE_CELL_SIZE = 30
export const BLOCK_SIZE = ONE_CELL_SIZE
export const WALL_CODE = 1;
export const FIXED_BLOCK_CODE = 2;
export const HOW_MANY_SHAPES = 2
export const SHAPE_CODE_OF_SHAPE_S = 0;
export const SHAPE_CODE_OF_SHAPE_T = 1;
export const WIDTH = 1/10;
export const HEIGHT = 1/30;
// export const EMPTY = 0;
// export const BLACK_STONE = 1;
// [[EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
// [BLACK, BLACK, BLACK]]
// [[0,0,0]
// [1,1,1]]

import { Color } from '../Union';
export const CANVAS_WIDTH : number = 4 / 5;
export const CANVAS_HEIGHT : number = 4 / 5;
export const CANVAS_BACKGROUND_COLOR : Color = 'White';

export const getCanvasWidth: (s: any) => number = (s: any) => {
  return s.windowWidth * CANVAS_WIDTH;
};

export const getCanvasHeight: (s: any) => number = (s: any) => {
  return s.windowWidth * CANVAS_HEIGHT;
};

export const getXOriginForDrawing: (s: any) => number = (s: any) => {
  if(s.windowWidth < 1000) {
    return s.windowWidth * (CANVAS_WIDTH - (WIDTH * 1)) / 2;
  } else {
    return s.windowWidth * (CANVAS_WIDTH - (WIDTH * 1)) / 2;
  }
}

export const getYOriginForDrawing: (s: any) => number = (s: any) => {
  if(s.windowWidth < 1000) {
    return s.windowWidth * (CANVAS_HEIGHT - (HEIGHT * 1)) / 2;
  } else {
    return s.windowWidth * (CANVAS_HEIGHT - (HEIGHT * 1)) / 2;
  }
}
