import { Component } from '@angular/core';
import { CounterService } from '../counter.service'; // correct path

@Component({
  selector: 'app-increment',
  template: `<button (click)="increment()">Increment</button>`,
})
export class IncrementComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }
}
