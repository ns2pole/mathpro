import { Edge } from './Edge';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Labyrinth2D } from './Labyrinth2D';
export class Vertex {
  id: number;

  constructor(id : number) {
    this.id = id;
  }

  static getAllVertexesFor(lab : Labyrinth2D) : Array<Vertex> {
    AdjacentMatrix.getAdjacentMatrixFor(lab)
    let allvertexes : Array<Vertex> = []
    for(let id = 0; id < lab.getIdCount(); id++) {
      allvertexes.push(new Vertex(id))
    }
    return allvertexes
  }

  getAdjacentVertexIdsBy(ad : AdjacentMatrix) : Array<number> {
    let vertexIds = []
    for(let i : number = 0; i < ad[this.id].length; i++) {
      if(ad[this.id][i] == "Adjacent") {
        vertexIds.push(i)
      }
    }
    return vertexIds;
  }

  getEdges(ad : AdjacentMatrix) : Array<Edge> {
    let edges : Array<Edge> = []
    for(let i : number = 0; i < ad[this.id].length; i++) {
      if(ad[this.id][i] == "Adjacent") {
        edges.push(new Edge(this.id, i))
      }
    }
    return edges;
  }

}
// native camp
