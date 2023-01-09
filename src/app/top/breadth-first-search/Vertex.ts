import { AdjacentMatrix } from './AdjacentMatrix';
import { Edge } from './Edge';
export class Vertex {
  id: number;
  constructor(id : number) {
    this.id = id;
  }
  
  getEdges(ad : AdjacentMatrix) : Array<Edge> {
    return [];
  }
  
  getAdjacentBy(ad : AdjacentMatrix) : Array<Vertex> {
    return [];
  }
    
  getPathTo(v : Vertex) : Array<Vertex> {
    return [];
  }

}
