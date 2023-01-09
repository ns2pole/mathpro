export class Edge {
	id : number;
  idsOfVertex : [number, number];
  constructor(id : number, vertexId1 : number, vertexId2 : number) {
    this.id = id
    this.idsOfVertex = [vertexId1, vertexId2]        
  }
}
