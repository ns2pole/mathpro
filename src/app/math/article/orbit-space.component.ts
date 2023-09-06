import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
declare var MathJax: any;

@Component({
  selector: 'app-contact',
  templateUrl: './orbit-space.component.html',
  styleUrls: ['../../app.component.css', './orbit-space.component.css']
})


export class OrbitSpaceComponent implements AfterViewChecked{
  constructor(private router: Router) {}

  ngAfterViewChecked() {
    if(MathJax.isReady !== false) {
      console.log(MathJax);
      MathJax.startup.defaultPageReady();
    }
  }
}

