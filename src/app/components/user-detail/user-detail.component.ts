import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `
    <h2>User Detail</h2>
    <p *ngIf="user">
      <strong>Name:</strong> {{ user.name }} <br>
      <strong>Age:</strong> {{ user.age }}
    </p>
    <a routerLink="/">Back to list</a>
  `
})
export class UserDetailComponent {
  user: any;

  constructor(private route: ActivatedRoute) {
    // The "user" comes from resolver
    this.user = this.route.snapshot.data['user'];
  }
}
