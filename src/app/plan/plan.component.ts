import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorCounterService } from '../visitor-counter-service/visitor-counter.service';

@Component({
  selector: 'app-contact',
  templateUrl: './plan.component.html',
  styleUrls: ['../app.component.css', './plan.component.css']
})
export class PlanComponent {
  constructor(private router: Router, private counterService: VisitorCounterService) {
    console.log('Counter updating...');
    this.counterService.updateCounter().subscribe(response => {
      console.log('Counter updated:', response);
    });

  }
  toContact() {
    const queryParams = { title: '無料体験の申し込み', message: '無料体験を申し込み致します。よろしくお願いします。' };
    this.router.navigate(['/contact'], { queryParams });
  }
}

