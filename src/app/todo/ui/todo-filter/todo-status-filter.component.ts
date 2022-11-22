import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoStatusEnum} from '../../../shared/enums/todo-status.enum';

@Component({
  selector: 'app-todo-status-filter',
  templateUrl: './todo-status-filter.component.html',
  styleUrls: ['./todo-status-filter.component.scss']
})
export class TodoStatusFilterComponent {
  @Input()
  public status: TodoStatusEnum|null = null;

  @Output()
  public statusChange: EventEmitter<TodoStatusEnum|null> = new EventEmitter<TodoStatusEnum|null>();

  public readonly availableStatuses: Array<TodoStatusEnum> = Object.values(TodoStatusEnum);

  public changeStatus(status: TodoStatusEnum|null): void {
    this.statusChange.next(status);
  }
}
