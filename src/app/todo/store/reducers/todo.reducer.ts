import {createReducer, on} from "@ngrx/store";
import {TodoFeatureModel} from "../../../shared/models/todo.model";
import * as fromApiAction from '../actions/todo-api.action';
import * as fromContainerAction from '../actions/todo-container.action';

const initialState: TodoFeatureModel = {
  todoList: [],
  removed: [],
  statusFilter: null,
}

export const todoFeatureReducer = createReducer(
  initialState,
  on(fromApiAction.todoAddedAction, (state: TodoFeatureModel, { todo }) => ({ ...state, todoList: [todo, ...state.todoList] })),
  on(fromApiAction.todoFetchedAction, (state: TodoFeatureModel, { todoList }) => ({ ...state, todoList })),
  on(fromApiAction.todoRemovedAction, fromApiAction.todoCompletedAction, (state: TodoFeatureModel, { todo }) => ({
    ...state,
    todoList: state.todoList.map((item) => {
      if (item.id !== todo.id) {
        return item;
      }

      return todo;
    })
  })),

  on(fromContainerAction.changeTodoStatusFilterAction, (state: TodoFeatureModel, { status }) => ({
    ...state,
    statusFilter: status,
  })),
);
