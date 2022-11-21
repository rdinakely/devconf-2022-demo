import {createAction, props} from "@ngrx/store";
import {TodoModel} from "../../../shared/models/todo.model";

export const fetchTodoAction = createAction('[Todo main page] Fetch todo list');
export const addTodoAction = createAction('[Todo main page] Add todo', props<{ description: string }>());
export const removeTodoAction = createAction('[Todo main page] Remove todo', props<{ todo: TodoModel }>())
export const completeTodoAction = createAction('[Todo main page] Complete todo', props<{ todo: TodoModel }>())
