import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from "../../../shared/models/todo.model";
import {TodoStatusEnum} from "../../../shared/enums/todo-status.enum";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input()
  public todo!: TodoModel;

  @Output()
  public remove: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public complete: EventEmitter<void> = new EventEmitter<void>();

  public readonly TodoStatus = TodoStatusEnum;

  public handleComplete(): void {
    this.complete.next();
  }

  public handleRemove(): void {
    this.remove.next();
  }
}
