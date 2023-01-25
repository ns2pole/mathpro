import { Component } from '@angular/core';
import { drawPoint } from 'chart.js/dist/helpers/helpers.canvas';
import * as p5 from 'p5';
import { getCanvasWidth, getCanvasHeight } from './Const';
import { Plane } from './Plane';

@Component({
  selector: 'app-breadth-first-search',
  templateUrl: './breadth-first-search.component.html',
  styleUrls: ['./breadth-first-search.component.css']
})

export class BreadthFirstSearchComponent {
  ngOnInit() {
    const plane : Plane = new Plane();

    const solutionPath : Array<number> = plane.lab.solveByBreadthFirstSearch();
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
    let sketch = (p: p5) => {
      p.setup = () => {
        let canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
        let ele : any = document.getElementById('canvas');
        canvas.parent(ele);
        p.draw = plane.draw(p, solutionPath);
        p.noLoop();
      };
      p.windowResized = () => {
        p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p));
      };
    }
    new p5(sketch);
  }
}
