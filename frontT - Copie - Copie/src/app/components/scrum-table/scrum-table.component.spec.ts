import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumTableComponent } from './scrum-table.component';

describe('ScrumTableComponent', () => {
  let component: ScrumTableComponent;
  let fixture: ComponentFixture<ScrumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
