import { Component } from '@angular/core';
import * as p5 from 'p5';
import { getCanvasWidth, getCanvasHeight } from './Const';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Plane } from './Plane';
import { getNumsIncludedIn } from './FunctionModule';

@Component({
  selector: 'app-breadth-first-search',
  templateUrl: './breadth-first-search.component.html',
  styleUrls: ['./breadth-first-search.component.css']
})

export class BreadthFirstSearchComponent {
  ngOnInit() {
    const lab : Labyrinth2D = Labyrinth2D.generateLabyrinth();
    const ad : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(lab);
    const plane : Plane = new Plane(lab, ad);
    // const solutionPath : Array<number> = plane.breadthFirstSearch();
    //TODO:
    //ボタンを押すとスタートとゴールとラビリンスのみが描かれる(黄色, 緑, 黒)
    // plane.draw(p);
    //drawSolutionをやめてSpaceに状態を持たせる。つまり、SpaceにisSearched, isOnSolutionを追加して描画はdraw(p)に統一。
    //planeが持つ更新される。
    //ボタンを押すと水が満たされていく様子が描かれる(水色)
    //plane1 = getCopiedPlaneOverwrittenFor(searchedIds);
    //plane1.draw(p);
    //ボタンを押すと解が描かれる(赤)
    //p2 = getCopiedPlaneOverwrittenFor(solutionPath);
    //plane2.draw(p);
    //TODO: 以下のようにする
    //ボタンで段階的にアニメーション
    //解なし対応
    //mapサイズ変更しやすいよう対応
    let sketch = (p: p5) => {
      p.setup = () => {
        let canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
        let ele : any = document.getElementById('canvas');
        canvas.parent(ele);
        const startId : number = plane.lab.getStartId();
        const goalId : number = plane.lab.getGoalId();
        let sequence : Set<Array<number>> = new Set([[startId]]);
        let searchedIds : Set<number> = getNumsIncludedIn(sequence);
        while(!searchedIds.has(goalId)) {
          sequence = plane.evolute(sequence);
          searchedIds = getNumsIncludedIn(sequence);
          plane.lab.updateSearchedStatusBy(searchedIds);
        }
        const solutionPathId : Array<number> = plane.breadthFirstSearch();
        plane.lab.updateSearchedStatusBy(searchedIds);
        plane.lab.updateShortestPathBy(solutionPathId);
        p.draw = plane.draw(p);
        p.noLoop();
      };
      p.windowResized = () => {
        p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p));
      };
    }
    new p5(sketch);
  }
}
