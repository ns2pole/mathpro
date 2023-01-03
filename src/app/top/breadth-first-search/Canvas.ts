export class Canvas {
  static width : number = 1 / 2;
  static height : number = 1 / 2;
  static getWidth(s:any) : number { 
    return s.windowWidth * Canvas.width;
  };
  static getHeight(s:any) : number { 
    return s.windowWidth * Canvas.height;
  };
  static xOriginForDrawing(s:any) : number {
    return Canvas.getWidth(s) / 8;
  }
  static yOriginForDrawing(s:any) : number {
    return Canvas.getHeight(s) / 8;
  }
}
