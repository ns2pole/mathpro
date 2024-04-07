import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './plan.component.html',
  styleUrls: ['../app.component.css', './plan.component.css']
})
export class PlanComponent {
  constructor(private router: Router) {
  }

  toContact() {
    const queryParams = { title: '無料体験の申し込み', message: '無料体験を申し込み致します。よろしくお願いします。' };
    this.router.navigate(['/contact'], { queryParams });
  }
}

