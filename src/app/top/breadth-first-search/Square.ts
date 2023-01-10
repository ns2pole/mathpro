import { Vertex } from './Vertex';
import { Space } from './Union';
export class Square extends Vertex{
  kind : Space
  isSearched : boolean = false;
  // size : Number | undefined;
  // paint(): void
  // draw(s:any) : void
  // getCenter() : [Number, Number]
  constructor(kind : Space) {
    super();
    this.kind = kind;
    this.isSearched = false;
  }
}
