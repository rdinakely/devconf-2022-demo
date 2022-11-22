import {AppStateModel} from "../../../shared/models/app-state.model";
import {createSelector} from "@ngrx/store";

const selectTodoFeature = (state: AppStateModel) => state.todoFeature;

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state) => state.todoList,
);

export const selectStatusFilter = createSelector(
  selectTodoFeature,
  (state) => state.statusFilter,
);

export const selectDisplayedTodoList = createSelector(
  selectTodoList,
  selectStatusFilter,
  (todoList, statusFilter) => {
    if (!statusFilter) {
      return todoList;
    }

    return todoList.filter(({ status }) => status === statusFilter);
  }
);

export const hasDisplayedTodo = createSelector(
  selectDisplayedTodoList,
  (displayedTodo) => displayedTodo.length > 0,
);
