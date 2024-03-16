import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
declare var MathJax: any;

@Component({
  selector: 'app-contact',
  templateUrl: '../html/what-is-capacitor.html',
  styleUrls: ['../../../app.component.css', '../../physics.component.css']
})


export class WhatIsCapacitorComponent implements AfterViewChecked {
  constructor(private router: Router) {}

  ngAfterViewChecked() {
    if(MathJax.isReady !== false) {
      MathJax.startup.defaultPageReady();
    }
  }
}

