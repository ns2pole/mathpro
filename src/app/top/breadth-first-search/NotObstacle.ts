import { Component } from '@angular/core';
import * as p5 from 'p5';
import { Plane } from './Plane';
import { Vertex } from './Vertex';
import { Color } from './Color';
import { Square } from './Square';
export abstract class NotObstacle extends Vertex implements Square{
  static color : Color | undefined;
  size : Number | undefined;
  public paint(): void {
    // console.log("paint");
  }
  public draw() : void {
    // console.log("draw");
  }
  public getCenter() : [Number, Number] {
    return [0, 0];
  }
  constructor(id : number) {
    super(id);
  }
  public test111(): Number {
    return 400;
  }
  public test333(): Number {
    return 500;
  }
}
