import {TodoStatusEnum} from "../enums/todo-status.enum";

export interface TodoFeatureModel {
  todoList: TodoModel[],
  statusFilter: TodoStatusEnum|null;
}

export interface TodoModel {
  id?: number;
  description: string;
  status: TodoStatusEnum;
}
