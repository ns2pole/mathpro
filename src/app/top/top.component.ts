import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['../app.component.css' , './top.component.css']
})
export class TopComponent {
  constructor(private router: Router) {}

  toContact() {
    const queryParams = { title: '無料体験の申し込み', message: '無料体験を申し込み致します。よろしくお願いします。' };
    this.router.navigate(['/contact'], { queryParams });
  }
}
