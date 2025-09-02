import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Define routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // default route
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Import routing module with routes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
