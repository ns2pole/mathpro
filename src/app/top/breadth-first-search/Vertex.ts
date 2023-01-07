import { IsAdjacent } from './Type';
import { Edge } from './Edge';
export class Vertex {
  id: number | undefined;  
  constructor(id : number) {
    this.id = id;
  }
  getEdges(adjacentMatrix : Array<Array<IsAdjacent>>) : Array<Edge> {
    return [];
  }
  
  getAdjacentBy(adjacentMatrix : Array<Array<IsAdjacent>>) : Array<Vertex> {
    return [];
  }
    
  getPathTo(v : Vertex) : Array<Vertex> {
    return [];
  }

  public static test13(): Number {
    return 500;
  }

}
