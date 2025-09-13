import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todos {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url ='https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
}
