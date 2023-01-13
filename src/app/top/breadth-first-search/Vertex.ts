import { Edge } from './Edge';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Labyrinth2D } from './Labyrinth2D';
import { getNumsIncludedIn } from './FunctionModule';
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



  //[[1 -> 2], [1 -> 5]] からの [[1 -> 2 -> 3], [1 -> 2 -> 6], [1 -> 5 -> 6], [1 -> 5 -> 9]] を作る方がいい気がする
  //こういう扱いやすいデータ構造を考えるのがむずい
  static evolute(sequence : Set<Array<number>>, ad : AdjacentMatrix) : Set<Array<number>> {
    const arr : Array<Array<number>> = Array.from(sequence);
    let searchedIds : Set<number> = getNumsIncludedIn(sequence)
    let result : Set<Array<number>> = new Set()
    //1つのpath例えば[1 ->2]のみを見るためにiを使う。
    for(let i : number = 0; i < arr.length; i++) {
      let lastId : number = arr[i][arr[i].length - 1]
      let adjacentIds : Array<number> = new Vertex(lastId).getAdjacentVertexIdsBy(ad)
      //1つのpathから複数のpathが生まれる。例えば[1 -> 2]から[1 -> 2 -> 5],[1 -> 2 -> 6]が生まれたりする。
      //そのpathsを生成するためにjを使う。
      for(let j : number = 0; j < adjacentIds.length; j++) {
        if(!searchedIds.has(adjacentIds[j])) {
          result.add(arr[i].concat([adjacentIds[j]]))
          //下記一行で経路が爆発的に増えないので高速化される。[1->2->6]と[1->5->6]みたいなのがどちらか片方しかできなくなる。
          searchedIds.add(adjacentIds[j])
        }
      }
    }
    return result
  }


  //return all fastest courses to destination
  //TODO:startからgoalへの経路が存在しない時の処理
  getAllFastestPathsByBreadFirstlyPathTo(destinationId : number, lab : Labyrinth2D) : Set<Array<number>> {
    let ad : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab)
    let idSequences : Set<Array<number>> = new Set([[this.id]])
    let evoluteCount = 0
    while(!getNumsIncludedIn(idSequences).has(destinationId)) {
      idSequences = Vertex.evolute(idSequences, ad)
      evoluteCount++
      console.log(evoluteCount)
      if(evoluteCount > 100) {
        return new Set()
      }
    }
    let arr : Array<Array<number>> = Array.from(idSequences)
    arr = arr.filter((path) => path.includes(destinationId) )
    return new Set(arr)
  }

  //幅優先探索。最短の経路が複数あると、このメソッドはテストしにくいのでテストは経路が一通りに決まるデータで行う。
  getFastestPathTo(vertexId : number, lab : Labyrinth2D) : Array<number> {
    return Array.from(this.getAllFastestPathsByBreadFirstlyPathTo(vertexId, lab))[0]
  }

  static getAllFastestPathsByBreadFirstlyPathTo(fromId : number, toId : number, lab : Labyrinth2D) : Set<Array<number>> {
    return new Vertex(fromId).getAllFastestPathsByBreadFirstlyPathTo(toId, lab)
  }

  static breadthFirstSearch(fromId : number, toId : number, lab : Labyrinth2D) : Array<number> {
    return new Vertex(fromId).getFastestPathTo(toId, lab)
  }

}
