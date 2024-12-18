import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModule をインポート
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { MathjaxModule } from "mathjax-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PlanComponent } from './plan/plan.component';
import { BarChartComponent } from './program/bar-chart/bar-chart.component';
import { BreadthFirstSearchComponent } from './program/breadth-first-search/breadth-first-search.component';
import { MathComponent } from './math/math.component';
import { MathProgrammingChannelComponent } from './math-programming-channel/math-programming-channel.component';
import { PhysicsComponent } from './physics/physics.component';
import { ProgramComponent } from './program/program.component';
import { PrimeFactorizationComponent } from './program/prime-factorization/prime-factorization.component';
import { RatioCalcComponent } from './program/ratio-calc/ratio-calc.component';
import { IntegerGcdComponent } from './program/integer-gcd/integer-gcd.component';
import { RecurringDecimalComponent } from './program/recurring-decimal/recurring-decimal.component';
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
import { MagneticFieldByCircularCurrentComponent } from './physics/note/ts/magnetic-field-by-circular-current';
import { SeriesSynthesisCapacityComponent } from './physics/note/ts/series_synthesis_capacity';
import { ParallelSynthesisCapacityComponent } from './physics/note/ts/parallel_synthesis_capacity';
import { CoilPropertyKeepCurrentComponent } from './physics/note/ts/coil-property-keep-current';
import { SelfInductanceOfSolenoidComponent } from './physics/note/ts/self-inductance-of-solenoid';

// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '**' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  { path: '', component: PlanComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
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
	{ path: 'math-programming-channel', component: MathProgrammingChannelComponent },
	{ path: 'physics-experiment-note/buoyancy-comparison', component: BuoyancyComparisonComponent },
  { path: 'physics-experiment-note/resistance-length-and-value', component: ResistanceLengthAndValueComponent },
  { path: 'physics-experiment-note/what-is-capacitor', component: WhatIsCapacitorComponent },
  { path: 'physics-experiment-note/magnetic-field-by-circular-current', component: MagneticFieldByCircularCurrentComponent },
  { path: 'physics-experiment-note/series_synthesis_capacity', component: SeriesSynthesisCapacityComponent },
  { path: 'physics-experiment-note/parallel_synthesis_capacity', component: ParallelSynthesisCapacityComponent },
  { path: 'physics-experiment-note/coil-property-keep-current', component: CoilPropertyKeepCurrentComponent },
  { path: 'physics-experiment-note/self-inductance-of-solenoid', component: SelfInductanceOfSolenoidComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    ContactComponent,
    BarChartComponent,
    BreadthFirstSearchComponent,
    MathComponent,
    MathProgrammingChannelComponent,
    PhysicsComponent,
    ProgramComponent,
    PrimeFactorizationComponent,
    RatioCalcComponent,
    IntegerGcdComponent,
    RecurringDecimalComponent,
    InvaderGameComponent,
    MechanicsComponent,
    TetrisComponent,
  ],
  imports: [
    FormsModule, // FormsModule を imports 配列に追加
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
