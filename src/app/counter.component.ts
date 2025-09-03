import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { selectCounterValue } from './counter.selectors';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ counter$ | async }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  counter$ = this.store.select(selectCounterValue).pipe(
    tap(value => console.log('Raw value from store:', value)),
    filter(value => value % 2 === 0),   // only even values
    tap(value => console.log('Even value:', value)),
    map(value => value * 10)            // transform before display
  );

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
