import {createReducer, on} from "@ngrx/store";
import {TodoFeatureModel} from "../../../shared/models/todo.model";
import * as fromApiAction from '../actions/todo-api.action';

const initialState: TodoFeatureModel = {
  todoList: [],
}

export const todoFeatureReducer = createReducer(
  initialState,
  on(fromApiAction.todoAddedAction, (state: TodoFeatureModel, { todo }) => ({ ...state, todoList: [todo, ...state.todoList] })),
  on(fromApiAction.todoFetchedAction, (state: TodoFeatureModel, { todoList }) => ({ ...state, todoList })),
  on(fromApiAction.todoRemovedAction, (state: TodoFeatureModel, { todo }) => ({
    ...state,
    todoList: state.todoList.filter(({ id }) => id !== todo.id),
  })),
  on(fromApiAction.todoCompletedAction, (state: TodoFeatureModel, { todo }) => ({
    ...state,
    todoList: state.todoList.map((item) => {
      if (item.id !== todo.id) {
        return item;
      }

      return todo;
    })
  }))
);
