import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Routing Example</h1>
    <nav>
      <a routerLink="">Home</a> |
      <a routerLink="about">About</a>
    </nav>
    <router-outlet></router-outlet> <!-- Routed views go here -->
  `
})
export class AppComponent { }
