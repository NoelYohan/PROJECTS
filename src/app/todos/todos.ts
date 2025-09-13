import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { Todo } from '../model/todos.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem,FormsModule,FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(Todos);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((Todos) => {
      this.todoItems.set(Todos);
    });
  }

  updateTodoItem(TodoItem : Todo)
  {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if(todo.id === TodoItem.id) {
          return{
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })

  })
}
}
