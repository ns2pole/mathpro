import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
declare var MathJax: any;

@Component({
  selector: 'app-contact',
  templateUrl: '../html/lemma-factorization-on-integer.html',
  styleUrls: ['../../../app.component.css', '../../math.component.css']
})


export class LemmaFactorizationOnIntegerComponent implements AfterViewChecked{
  constructor(private router: Router) {}

  ngAfterViewChecked() {
    if(MathJax.isReady !== false) {
      MathJax.startup.defaultPageReady();
    }
  }
}

