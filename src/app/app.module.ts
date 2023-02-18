import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BarChartComponent } from './top/bar-chart/bar-chart.component';
import { BreadthFirstSearchComponent } from './top/breadth-first-search/breadth-first-search.component';
import { ProgramComponent } from './program/program.component';
import { PrimeFactorizationComponent } from './top/prime-factorization/prime-factorization.component';
import { InvaderGameComponent } from './top/invader-game/invader-game.component';
import { MechanicsComponent } from './top/mechanics/mechanics.component';

// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '**' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  { path: '', component: TopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'program', component: ProgramComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    AboutComponent,
    ContactComponent,
    BarChartComponent,
    BreadthFirstSearchComponent,
    ProgramComponent,
    PrimeFactorizationComponent,
    InvaderGameComponent,
    MechanicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
