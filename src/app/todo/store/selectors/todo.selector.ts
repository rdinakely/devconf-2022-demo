import {AppStateModel} from "../../../shared/models/app-state.model";
import {createSelector} from "@ngrx/store";

const selectTodoFeature = (state: AppStateModel) => state.todoFeature;

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state) => state.todoList,
);
