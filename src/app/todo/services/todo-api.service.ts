import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TodoModel} from '../../shared/models/todo.model';

const initialTodos: TodoModel[] = [
  { id: Date.now(), description: 'DevConf', isComplete: false },
  { id: Date.now() + 1, description: 'Shopping', isComplete: false },
  { id: Date.now() + 2, description: 'Sleep', isComplete: false },
]

@Injectable()
export class TodoApiService {
  public fetchAll(): Observable<TodoModel[]> {
    return of(initialTodos);
  }

  public add(description: string): Observable<TodoModel> {
    return of({
      id: Date.now(),
      description,
      isComplete: false,
    });
  }

  public remove(todo: TodoModel): Observable<TodoModel> {
    return of(todo);
  }

  public complete(todo: TodoModel): Observable<TodoModel> {
    return of ({
      ...todo,
      isComplete: true,
    });
  }
}
