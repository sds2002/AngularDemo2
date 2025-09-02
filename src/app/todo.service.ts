import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // Initial state
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  
  // Expose state as Observable
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  constructor() {}

  // Get current state snapshot
  private get todos(): Todo[] {
    return this.todosSubject.getValue();
  }

  // Add a todo
  addTodo(title: string) {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    this.todosSubject.next([...this.todos, newTodo]);
  }

  // Toggle completion
  toggleTodo(id: number) {
    const updatedTodos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(updatedTodos);
  }

  // Delete a todo
  deleteTodo(id: number) {
    const filteredTodos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next(filteredTodos);
  }
}
