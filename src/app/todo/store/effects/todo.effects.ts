import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {addTodoAction, completeTodoAction, fetchTodoAction, removeTodoAction} from "../actions/todo-container.action";
import {map, switchMap} from "rxjs";
import {TodoApiService} from "../../services/todo-api.service";
import {todoAddedAction, todoCompletedAction, todoFetchedAction, todoRemovedAction} from "../actions/todo-api.action";

@Injectable()
export class TodoEffects {
  public readonly loadTodoList$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTodoAction),
    switchMap(
      () => this.todoApiService.fetchAll()
        .pipe(map((todoList) => todoFetchedAction({ todoList })))
    ),
  ));

  public readonly addTodo$ = createEffect(() => this.actions$.pipe(
    ofType(addTodoAction),
    switchMap(
      (action) => this.todoApiService.add(action.description)
        .pipe(map((addedTodo) => todoAddedAction({ todo: addedTodo })))
    ),
  ));

  public readonly removeTodo$ = createEffect(() => this.actions$.pipe(
    ofType(removeTodoAction),
    switchMap(
      (action) => this.todoApiService.remove(action.todo)
        .pipe(map((removedTodo) => todoRemovedAction({ todo: removedTodo })))
    ),
  ));

  public readonly completeTodo$ = createEffect(() => this.actions$.pipe(
    ofType(completeTodoAction),
    switchMap(
      (action) => this.todoApiService.complete(action.todo)
        .pipe(map((completedTodo) => todoCompletedAction({ todo: completedTodo })))
    ),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly todoApiService: TodoApiService,
  ) {}
}
