import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // 追加
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
