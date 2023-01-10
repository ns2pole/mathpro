import { Edge } from './Edge';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Labyrinth2D } from './Labyrinth2D';
export class Vertex {
  id: number;
  static searchedIds : Array<number> = []
  static num : number = 0;

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

  getAdjacentVertexIdsBy(ad : AdjacentMatrix, excludeFlg : boolean = false) : Array<number> {
    let vertexIds = []
    for(let i : number = 0; i < ad[this.id].length; i++) {
      if(ad[this.id][i] == "Adjacent") {
        vertexIds.push(i)
      }
    }
    if(excludeFlg) {
      vertexIds = vertexIds.filter((id) => {
        return !Vertex.searchedIds.includes(id)
      })
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

  static getNumsIncludedIn(set : Set<Array<number>>) : Set<number> {
    const arr : Array<Array<number>> = Array.from(set)
    let result : Array<number> = []
    for(let i : number = 0; i < arr.length; i++) {
      for(let j : number = 0; j < arr[i].length; j++) {
        result.push(arr[i][j])
      }
    }
    return new Set(result.filter((x, i) => result.indexOf(x) === i))
  }

  //TODO:探索済を除外する
  //[[1 -> 2], [1 -> 5]] からの [[1 -> 2 -> 3], [1 -> 2 -> 6], [1 -> 5 -> 6], [1 -> 5 -> 9]] を作る方がいい気がする
  //getAdjacentUnsearchedVertexIdsを作る
  //で再帰で回す
  //こういう扱いやすいデータ構造を考えるのがむずい
  static evolute(sequence : Set<Array<number>>, ad : AdjacentMatrix) : Set<Array<number>> {
    const arr : Array<Array<number>> = Array.from(sequence);
    let searchedIds : Set<number> = Vertex.getNumsIncludedIn(sequence)
    let result : Set<Array<number>> = new Set()
    //1つのpathを見るためにiを使う。
    for(let i : number = 0; i < arr.length; i++) {
      let lastId : number = arr[i][arr[i].length - 1]
      let adjacentIds : Array<number> = new Vertex(lastId).getAdjacentVertexIdsBy(ad, true)
      //1つのpathから複数のpathが生まれる。そのpathを回すためにjを使う。
      for(let j : number = 0; j < adjacentIds.length; j++) {
        if(!searchedIds.has(adjacentIds[j])) {
          result.add(arr[i].concat([adjacentIds[j]]))
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
    while(!Vertex.getNumsIncludedIn(idSequences).has(destinationId)) {
      idSequences = Vertex.evolute(idSequences, ad)
    }
    let arr : Array<Array<number>> = Array.from(idSequences)
    arr = arr.filter((path) => path.includes(destinationId) )
    return new Set(arr)
  }

  //幅優先探索。最短の経路が複数あると、このメソッドはテストしにくいのでテストは経路が一通りに決まるデータで行う。
  getFastestPathTo(vertexId : number, lab : Labyrinth2D) : Array<number> {
    return Array.from(this.getAllFastestPathsByBreadFirstlyPathTo(vertexId, lab))[0]
  }

  static breadthFirstSearch(fromId : number, toId : number, lab : Labyrinth2D) : Array<number> {
    return new Vertex(fromId).getFastestPathTo(toId, lab)
  }

}
