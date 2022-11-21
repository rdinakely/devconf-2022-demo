import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  @Output()
  public todoAdd: EventEmitter<string> = new EventEmitter<string>();

  public todoDescription = '';

  public handleAdd(): void {
    this.todoAdd.next(this.todoDescription);
    this.todoDescription = '';
  }
}
