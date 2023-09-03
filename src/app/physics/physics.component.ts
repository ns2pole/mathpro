import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './physics.component.html',
  styleUrls: ['../app.component.css', './physics.component.css']
})
export class PhysicsComponent {
  constructor(private router: Router) {}
}
