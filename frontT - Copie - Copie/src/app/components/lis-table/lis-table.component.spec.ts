import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisTableComponent } from './lis-table.component';

describe('LisTableComponent', () => {
  let component: LisTableComponent;
  let fixture: ComponentFixture<LisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
