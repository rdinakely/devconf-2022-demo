import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoStatusFilterComponent } from './todo-status-filter.component';

describe('TodoFilterComponent', () => {
  let component: TodoStatusFilterComponent;
  let fixture: ComponentFixture<TodoStatusFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoStatusFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
