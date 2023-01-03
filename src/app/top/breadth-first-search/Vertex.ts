import { Edge } from './Edge';
import { IsAdjacent } from './IsAdjacent';
export class Vertex {
  id: number | undefined;  
  static SIZE : number = 1 / 30;
  static getSize(s:any) : number { 
    return s.windowWidth * Vertex.SIZE;
  };
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
