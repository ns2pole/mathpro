import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { MathjaxModule } from "mathjax-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';
import { BarChartComponent } from './program/bar-chart/bar-chart.component';
import { BreadthFirstSearchComponent } from './program/breadth-first-search/breadth-first-search.component';
import { MathComponent } from './math/math.component';
import { PhysicsComponent } from './physics/physics.component';
import { ProgramComponent } from './program/program.component';
import { PrimeFactorizationComponent } from './program/prime-factorization/prime-factorization.component';
import { InvaderGameComponent } from './program/invader-game/invader-game.component';
import { MechanicsComponent } from './program/mechanics/mechanics.component';
import { TetrisComponent } from './program/tetris/tetris.component';
import { CombiOrbitSpaceComponent } from './math/article/ts/combi-orbit-space.component';
import { DupCombiOrbitSpaceComponent } from './math/article/ts/dup-combi-orbit-space.component';
import { PermutationComponent } from './math/article/ts/permutation.component';
import { DupPermutationComponent } from './math/article/ts/dup-permutation.component';
import { CyclePermutationComponent } from './math/article/ts/cycle-permutation.component';
import { RotationToStandardComponent } from './math/article/ts/rotation-to-standard.component';
import { ImmutabilityForSlideComponent } from './math/article/ts/immutability-for-slide.component';
import { ImmutabilityForRotationComponent } from './math/article/ts/immutability-for-rotation.component';
import { ComingSoonComponent } from './math/article/ts/coming-soon.component';
import { DiscriminantAndFactorizationComponent } from './math/article/ts/discriminant-and-factorization.component';
import { LemmaFactorizationOnIntegerComponent } from './math/article/ts/lemma-factorization-on-integer.component';
import { BuoyancyComparisonComponent } from './physics/note/ts/buoyancy-comparison';
import { ResistanceLengthAndValueComponent } from './physics/note/ts/resistance-length-and-value';
import { WhatIsCapacitorComponent } from './physics/note/ts/what-is-capacitor';

// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '**' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  { path: '', component: TopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'math', component: MathComponent },
  { path: 'physics', component: PhysicsComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'math/combi-orbit-space', component: CombiOrbitSpaceComponent },
  { path: 'math/dup-combi-orbit-space', component: DupCombiOrbitSpaceComponent },
  { path: 'math/permutation', component: PermutationComponent },
  { path: 'math/dup-permutation', component: DupPermutationComponent },
  { path: 'math/cycle-permutation', component: CyclePermutationComponent },
  { path: 'math/rotation-to-standard', component: RotationToStandardComponent },
  { path: 'math/coming-soon', component: ComingSoonComponent },
  { path: 'math/immutability-for-slide', component: ImmutabilityForSlideComponent },
  { path: 'math/immutability-for-rotation', component: ImmutabilityForRotationComponent },
  { path: 'math/discriminant-and-factorization', component: DiscriminantAndFactorizationComponent },
	{ path: 'math/lemma-factorization-on-integer', component: LemmaFactorizationOnIntegerComponent },
	{ path: 'physics-experiment-note/buoyancy-comparison', component: BuoyancyComparisonComponent },
  { path: 'physics-experiment-note/resistance-length-and-value', component: ResistanceLengthAndValueComponent },
  { path: 'physics-experiment-note/what-is-capacitor', component: WhatIsCapacitorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    AboutComponent,
    ContactComponent,
    BarChartComponent,
    BreadthFirstSearchComponent,
    MathComponent,
    PhysicsComponent,
    ProgramComponent,
    PrimeFactorizationComponent,
    InvaderGameComponent,
    MechanicsComponent,
    TetrisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する,
    HttpClientModule,
    MathjaxModule.forRoot(
      // {
      //   "config": {
      //     "loader": {
      //       "load": ["output/svg", "[tex]/require", "[tex]/ams"]
      //     },
      //     "tex": {
      //       "inlineMath": [["$", "$"]],
      //       "packages": ["base", "require", "ams"]
      //     },
      //     "svg": { "fontCache": "global" }
      //   },
      //   "src": "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/startup.js"
      // }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
