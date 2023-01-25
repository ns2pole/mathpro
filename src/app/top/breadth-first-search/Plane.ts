import { Edge } from './Edge';
import { CANVAS_BACKGROUND_COLOR, getXOriginForDrawing, getYOriginForDrawing} from './Const';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Color } from './Union';
import { Vertex } from './Vertex';
import { getNumsIncludedIn } from './FunctionModule';
import * as p5 from 'p5';
export class Plane {
  lab : Labyrinth2D;
  ad : AdjacentMatrix;
  backGroundColor : Color = CANVAS_BACKGROUND_COLOR

  constructor(lab : Labyrinth2D, ad : AdjacentMatrix) {
    this.lab = lab
    this.ad = ad
  }

  getVertexIdBy(row: Number, col: Number) : Number {
    return 0;
  }

  static toNumberFor(row : Number, column : Number) : Number {
    return 0;
  }

  // getAllObstacles() : Array<Obstacle> {
  //   return [];
  // }
  // getStart() : Start {
  //   return new Start(0);
  // }
  getAllEdges() : Array<Edge> {
    return [];
  }
  // getAllVacants() : Array<Vacant> {
  //   return [];
  // }
  // getGoal() : Goal {
  //   return new Goal(0);
  // }

  getSquareStartPosition() : [Number, Number] {
    return [0, 0];
  }


  //[[1 -> 2], [1 -> 5]] からの [[1 -> 2 -> 3], [1 -> 2 -> 6], [1 -> 5 -> 6], [1 -> 5 -> 9]] を作る方がいい気がする
  //こういう扱いやすいデータ構造を考えるのがむずい
  evolute(sequence : Set<Array<number>>) : Set<Array<number>> {
    const arr : Array<Array<number>> = Array.from(sequence);
    let searchedIds : Set<number> = getNumsIncludedIn(sequence)
    let result : Set<Array<number>> = new Set()
    //1つのpath例えば[1 ->2]のみを見るためにiを使う。
    for(let i : number = 0; i < arr.length; i++) {
      let lastId : number = arr[i][arr[i].length - 1]
      let adjacentIds : Array<number> = new Vertex(lastId).getAdjacentVertexIdsBy(this.ad);
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

  draw(p: p5, path : Array<number>): () => void {
    return () => {
      p.background(this.backGroundColor);
      p.rectMode(p.CORNER);
      this.lab.draw(p)
      this.lab.drawSolution(p, path)
    }
  }



  //return all fastest courses to destination
  //TODO:startからgoalへの経路が存在しない時の処理
  getAllFastestPathsByBreadFirstlyPathTo(fromId : number, toId : number) : Set<Array<number>> {
    let idSequences : Set<Array<number>> = new Set([[fromId]])
    let evoluteCount = 0
    while(!getNumsIncludedIn(idSequences).has(toId)) {
      idSequences = this.evolute(idSequences)
      evoluteCount++
      console.log(evoluteCount)
      if(evoluteCount > 100) {
        return new Set()
      }
    }
    let arr : Array<Array<number>> = Array.from(idSequences)
    arr = arr.filter((path) => path.includes(toId) )
    return new Set(arr)
  }

  //幅優先探索。最短の経路が複数あると、このメソッドはテストしにくいのでテストは経路が一通りに決まるデータで行う。
  // getFastestPathTo(vertexId : number, lab : Labyrinth2D) : Array<number> {
  //   return Array.from(this.getAllFastestPathsByBreadFirstlyPathTo(vertexId, lab))[0]
  // }

  // static getAllFastestPathsByBreadFirstlyPathTo(fromId : number, toId : number, lab : Labyrinth2D) : Set<Array<number>> {
  //   return new Vertex(fromId).getAllFastestPathsByBreadFirstlyPathTo(toId, lab)
  // }

  breadthFirstSearch(fromId : number, toId : number) : Array<number> {
    return Array.from(this.getAllFastestPathsByBreadFirstlyPathTo(fromId, toId))[0];
  }
}
