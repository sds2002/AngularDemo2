import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="['/user', user.id]">{{ user.name }}</a>
      </li>
    </ul>
  `
})
export class UserListComponent {
  users: any[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(data => this.users = data);
  }
}
