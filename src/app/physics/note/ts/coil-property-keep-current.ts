import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
declare var MathJax: any;

@Component({
  selector: 'app-contact',
  templateUrl: '../html/coil-property-keep-current.html',
  styleUrls: ['../../../app.component.css', '../../physics.component.css']
})


export class CoilPropertyKeepCurrentComponent implements AfterViewChecked {
  constructor(private router: Router) {}

  ngAfterViewChecked() {
    if(MathJax.isReady !== false) {
      MathJax.startup.defaultPageReady();
    }
  }
}

