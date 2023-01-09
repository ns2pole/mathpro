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

  getIdAndAdjacentVertexIds(ad : AdjacentMatrix) : [number, Array<number>] {
    return [this.id, this.getAdjacentVertexIdsBy(ad)]
  }

  getIdsSequenceOfBreadFirstlyPathTo(id : number, ad : AdjacentMatrix) : Array<Array<[number, Array<number>]>> {
    let sequenceOfIdsOnPath : Array<Array<[number, Array<number>]>> = []
    if(id == this.id) {
      return []
    } else {
      let initPair : [number, Array<number>] = this.getIdAndAdjacentVertexIds(ad)
      sequenceOfIdsOnPath.push([initPair])
      let ids : number[] = initPair[1]
      while(ids.includes(id)) {
        sequenceOfIdsOnPath.push(Vertex.evolute(sequenceOfIdsOnPath[length - 1], ad)) 
      }
      return sequenceOfIdsOnPath;
    }
  }

  static evolute(searchSequence : Array<[number, Array<number>]>, ad : AdjacentMatrix) : Array<[number, Array<number>]> {
    let evolutedSequence : Array<[number, Array<number>]> = []
    let ids = []
    for(let i : number = 0; i < searchSequence.length; i++) {
      ids.push(searchSequence[i][1])
    }
    ids = ids.flat()
    for(let i : number = 0; i < ids.length; i++) {
      let vertex : Vertex = new Vertex(ids[i])
      evolutedSequence.push(vertex.getIdAndAdjacentVertexIds(ad))
    }
    return evolutedSequence;
  }

  getIdsOfBreadFirstlyPathTo(id : number, ad : AdjacentMatrix) : Array<number> {
    let sequenceOfIdsOnPath : Array<Array<number>> = []
    for(let i : number = 0; i < ad.length; i++) {
      sequenceOfIdsOnPath.push(this.getAdjacentVertexIdsBy(ad))
    } 
    return [];
  }
}
