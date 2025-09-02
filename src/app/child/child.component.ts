import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Child component content here.</p>`
})
export class ChildComponent {
  sayHello() {
    alert('Hello from the Child Component!');
  }
}
