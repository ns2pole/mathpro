import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
declare var MathJax: any;

@Component({
  selector: 'app-contact',
  templateUrl: './combi-orbit-space.component.html',
  styleUrls: ['../../app.component.css', '../math.component.css']
})


export class CombiOrbitSpaceComponent implements AfterViewChecked{
  constructor(private router: Router) {}

  ngAfterViewChecked() {
    if(MathJax.isReady !== false) {
      MathJax.startup.defaultPageReady();
    }
  }
}

