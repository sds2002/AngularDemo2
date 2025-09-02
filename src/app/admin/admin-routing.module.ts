import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],   // Protect ALL children
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
