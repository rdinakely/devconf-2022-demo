import { NgModule } from "@angular/core";
import {TodoComponent} from "./container/todo.component";
import { TodoItemComponent } from './ui/todo-item/todo-item.component';
import { TodoAddComponent } from './ui/todo-add/todo-add.component';
import {FormsModule} from "@angular/forms";
import {TodoApiService} from "./services/todo-api.service";
import {StoreModule} from "@ngrx/store";
import {todoFeatureReducer} from "./store/reducers/todo.reducer";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./store/effects/todo.effects";
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import { TodoStatusFilterComponent } from './ui/todo-filter/todo-status-filter.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoStatusFilterComponent,
  ],
  exports: [
    TodoComponent,
  ],
  imports: [
    FormsModule,
    StoreModule.forFeature('todoFeature', todoFeatureReducer),
    EffectsModule.forFeature([TodoEffects]),
    AsyncPipe,
    NgForOf,
    NgIf,
    TitleCasePipe,
  ],
  providers: [
    TodoApiService,
  ],
})
export class TodoModule {}
