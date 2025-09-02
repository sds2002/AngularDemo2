import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Interceptor Example</h1>
    <button (click)="loadData()">Load Data</button>
    <pre>{{ data | json }}</pre>
  `
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  loadData() {
    this.dataService.getData().subscribe({
      next: (res) => (this.data = res),
      error: (err) => console.error('Error from component:', err)
    });
  }
}
