import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
import { FeeComponent } from './fee/fee.component';
import { AboutComponent } from './about/about.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '**' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  { path: 'top', component: TopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fee', component: FeeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    AboutComponent,
    FeeComponent,
    ContactComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
