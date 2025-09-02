// Angular component illustrating the use of ViewChild

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
    <h2 #headingRef>Angular ViewChild Example</h2>
    <button (click)="changeHeadingColor()">Change Heading Color</button>
  `,
  styles: [`h2 { color: black; }`]
})
export class ViewchildComponent implements AfterViewInit {
  // ViewChild decorator to access the heading element
  @ViewChild('headingRef') heading: ElementRef<HTMLHeadingElement> | undefined;

  ngAfterViewInit() {
    // Access the native element after the view initializes
    if (this.heading) {
      console.log('Initial heading text:', this.heading.nativeElement.textContent);
    }
  }

  changeHeadingColor() {
    if (this.heading) {
      this.heading.nativeElement.style.color = 'blue';
    }
  }
}
