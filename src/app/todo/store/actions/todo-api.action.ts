import {createAction, props} from "@ngrx/store";
import {TodoModel} from "../../../shared/models/todo.model";

export const todoFetchedAction = createAction('[Todo API] Todo list fetched', props<{ todoList: TodoModel[] }>());
export const todoAddedAction = createAction('[Todo API] Todo added', props<{ todo: TodoModel }>());
export const todoRemovedAction = createAction('[Todo API] Todo removed', props<{ todo: TodoModel }>());
export const todoCompletedAction = createAction('[Todo API] Todo completed', props<{ todo: TodoModel }>());
