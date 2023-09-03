import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './math.component.html',
  styleUrls: ['../app.component.css', './math.component.css']
})
export class MathComponent {
  constructor(private router: Router) {}
}

