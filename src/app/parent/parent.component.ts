import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <ng-content></ng-content>
    <button (click)="callChild()">Call Child Method</button>
  `
})
export class ParentComponent implements AfterContentInit {
  @ContentChild(ChildComponent) child!: ChildComponent;

  ngAfterContentInit() {
    // This lifecycle hook ensures the content child is set after content projection
    console.log('ContentChild:', this.child);
  }

  callChild() {
    if (this.child) {
      this.child.sayHello();
    } else {
      alert('Child component not found!');
    }
  }
}
