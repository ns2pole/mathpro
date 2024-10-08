import { Component } from '@angular/core';
import * as p5 from 'p5';
import { getCanvasWidth, getCanvasHeight } from './Const';
import { Labyrinth2D } from './Labyrinth2D';
import { AdjacentMatrix } from './AdjacentMatrix';
import { Plane } from './Plane';
import { getNumsIncludedIn, sleep } from './FunctionModule';

@Component({
  selector: 'app-breadth-first-search',
  templateUrl: './breadth-first-search.component.html',
  styleUrls: ['../program.component.css']
})

export class BreadthFirstSearchComponent {
  lab : Labyrinth2D = Labyrinth2D.generateLabyrinth();
  ad : AdjacentMatrix = AdjacentMatrix.getAdjacentMatrixFor(this.lab);
  plane : Plane = new Plane(this.lab, this.ad);
  buttonDisabled : boolean = false;

  sketch = (p: p5) => {
    p.setup = () => {
      let canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
      let ele : any = document.getElementById('bread-first-search-canvas');
      canvas.parent(ele);

    };
    p.draw = this.plane.draw(p);
    p.noLoop();
    p.windowResized = () => {
      p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p));
    };
  }
  p : any = null;

  ngOnInit() {
    this.p = new p5(this.sketch);
  }

  async draw() {
    this.buttonDisabled = true;
    await this.evoluteAndDraw();
    this.drawSolution();
    this.buttonDisabled = false;
  }

  async evoluteAndDraw() {
    const startId : number = this.plane.lab.getStartId();
    const goalId : number = this.plane.lab.getGoalId();
    let sequence : Set<Array<number>> = new Set([[startId]]);
    let searchedIds : Set<number> = getNumsIncludedIn(sequence);
    let evoluteCount : number = 0;
    while(!searchedIds.has(goalId) && evoluteCount < this.plane.lab.getIdCount()) {
      sequence = this.plane.evolute(sequence);
      searchedIds = getNumsIncludedIn(sequence);
      this.plane.lab.updateSearchedStatusBy(searchedIds);
      this.p.draw();
      this.p.noLoop();
      await sleep(100);
      evoluteCount++;
      console.log('evolute');
    }
  };

  drawSolution() {
    const solutionPathId : Array<number> = this.plane.breadthFirstSearch();
    this.plane.lab.updateShortestPathBy(solutionPathId);
    this.p.draw();
    this.p.noLoop();
  };


  reset() {
    // 既存の p5 インスタンスを停止し、キャンバスを削除する
    if (this.p) {
      this.p.remove(); // p5 の remove() メソッドでキャンバスを削除
    }

    // 新しい迷路と関連オブジェクトを生成
    this.lab = Labyrinth2D.generateLabyrinth();
    this.ad = AdjacentMatrix.getAdjacentMatrixFor(this.lab);
    this.plane = new Plane(this.lab, this.ad);

    // 新しい p5 インスタンスを生成して描画を開始
    this.p = new p5(this.sketch);
  };
}
