import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // makes it globally injectable
})
export class CounterService {
  private counterSubject = new Subject<number>();
  counter$ = this.counterSubject.asObservable();
  private counter = 0;

  increment() {
    this.counter++;
    this.counterSubject.next(this.counter);
  }
}
