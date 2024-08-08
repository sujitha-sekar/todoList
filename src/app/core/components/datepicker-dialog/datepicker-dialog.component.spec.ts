import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDialogComponent } from './datepicker-dialog.component';

describe('DatepickerDialogComponent', () => {
  let component: DatepickerDialogComponent;
  let fixture: ComponentFixture<DatepickerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerDialogComponent]
    });
    fixture = TestBed.createComponent(DatepickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
