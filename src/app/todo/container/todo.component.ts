import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {TodoModel} from "../../shared/models/todo.model";
import {hasDisplayedTodo, selectDisplayedTodoList, selectStatusFilter} from "../store/selectors/todo.selector";
import {AppStateModel} from "../../shared/models/app-state.model";
import {
  addTodoAction, changeTodoStatusFilterAction,
  completeTodoAction,
  fetchTodoAction,
  removeTodoAction
} from "../store/actions/todo-container.action";
import {TodoStatusEnum} from "../../shared/enums/todo-status.enum";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  public readonly todoList$: Observable<TodoModel[]>;
  public readonly statusFilter$: Observable<TodoStatusEnum|null>;
  public readonly hasDisplayedTodo$: Observable<boolean>;

  constructor(
    private readonly store: Store<AppStateModel>,
  ) {
    this.todoList$ = store.select(selectDisplayedTodoList);
    this.statusFilter$ = store.select(selectStatusFilter);
    this.hasDisplayedTodo$ = store.select(hasDisplayedTodo);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchTodoAction());
  }

  handleAddTodo(todoDescription: string): void {
    this.store.dispatch(addTodoAction({ description: todoDescription }));
  }

  handleRemoveTodo(todo: TodoModel): void {
    this.store.dispatch(removeTodoAction({ todo }))
  }

  handleCompleteTodo(todo: TodoModel): void {
    this.store.dispatch(completeTodoAction({ todo }));
  }

  handleStatusFilterChange(status: TodoStatusEnum|null) {
    this.store.dispatch(changeTodoStatusFilterAction({ status }));
  }
}
