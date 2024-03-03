import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
declare var MathJax: any;

@Component({
  selector: 'app-contact',
  templateUrl: '../html/resistance-length-and-value.html',
  styleUrls: ['../../../app.component.css', '../../physics.component.css']
})


export class ResistanceLengthAndValueComponent implements AfterViewChecked {
  constructor(private router: Router) {}

  ngAfterViewChecked() {
    if(MathJax.isReady !== false) {
      MathJax.startup.defaultPageReady();
    }
  }
}

