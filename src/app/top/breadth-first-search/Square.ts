import { Vertex } from './Vertex';
import { Space } from './Union';
import { Labyrinth2D } from './Labyrinth2D';
export class Square extends Vertex{
  
  kind : Space
  isSearched : boolean = false;
  static size : number = 1 / 30;
  paint(): void {

  }
  // draw(s:any) : void
  // getCenter() : [Number, Number]
  constructor(id : number, kind : Space) {
    super(id);
    this.kind = kind;
    this.isSearched = false;
  }

  static getSize(arg: any) : number {
    return arg.windowWidth * Square.size;
  }


}