import { Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<h1>Середній бал групи: <ng-content></ng-content></h1>`,
  styles: [`h1 {
    font-size: 14pt;
    text-align: center;
  }`]
})
export class ChildComponent {}

