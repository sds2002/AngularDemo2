// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Needed for ngModel

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent // Declare the component
  ],
  imports: [
    BrowserModule,
    FormsModule // For two-way binding [(ngModel)]
  ],
  providers: [TodoService], // Inject service (optional if providedIn: 'root')
  bootstrap: [AppComponent] // Root component
})
export class AppModule { }
