import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service'; // correct path

@Component({
  selector: 'app-display',
  template: `<h1>Counter: {{ counter }}</h1>`
})
export class DisplayComponent implements OnInit {
  counter = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.counter$.subscribe(value => {
      this.counter = value;
    });
  }
}
