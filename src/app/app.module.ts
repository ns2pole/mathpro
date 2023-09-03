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

import { OrbitSpaceComponent } from './math/article/orbit-space.component';

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
  { path: 'math/orbit-space', component: OrbitSpaceComponent }
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
    MathjaxModule.forRoot(/*Optional Config*/),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
