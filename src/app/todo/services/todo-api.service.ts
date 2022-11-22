import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TodoModel} from '../../shared/models/todo.model';
import {TodoStatusEnum} from "../../shared/enums/todo-status.enum";

const initialTodos: TodoModel[] = [
  { id: Date.now(), description: 'DevConf', status: TodoStatusEnum.UNDONE },
  { id: Date.now() + 1, description: 'Shopping', status: TodoStatusEnum.UNDONE },
  { id: Date.now() + 2, description: 'Sleep', status: TodoStatusEnum.UNDONE },
];

@Injectable()
export class TodoApiService {
  public fetchAll(): Observable<TodoModel[]> {
    return of(initialTodos);
  }

  public add(description: string): Observable<TodoModel> {
    return of({
      id: Date.now(),
      description,
      status: TodoStatusEnum.UNDONE,
    });
  }

  public remove(todo: TodoModel): Observable<TodoModel> {
    return of({
      ...todo,
      status: TodoStatusEnum.REMOVED,
    });
  }

  public complete(todo: TodoModel): Observable<TodoModel> {
    return of ({
      ...todo,
      status: TodoStatusEnum.DONE,
    });
  }
}
