export class Edge {
  idsOfVertex : [number, number];
  constructor(vertexId1 : number, vertexId2 : number) {
    this.idsOfVertex = [vertexId1, vertexId2]        
  }
}
