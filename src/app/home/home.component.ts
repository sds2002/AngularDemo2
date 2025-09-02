import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  users = [
    { id: 1, name: 'Deepa' },
    { id: 2, name: 'Raj' },
    { id: 3, name: 'Asha' }
  ];
}
