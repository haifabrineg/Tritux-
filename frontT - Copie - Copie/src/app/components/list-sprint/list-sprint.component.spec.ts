import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSprintComponent } from './list-sprint.component';

describe('ListSprintComponent', () => {
  let component: ListSprintComponent;
  let fixture: ComponentFixture<ListSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
