export interface TodoFeatureModel {
  todoList: TodoModel[],
}

export interface TodoModel {
  id?: number;
  description: string;
  isComplete: boolean;
}
