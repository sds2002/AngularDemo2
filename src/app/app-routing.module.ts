import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  { path: '', component: UserListComponent },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  },
  // Redirect unknown routes to Home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
