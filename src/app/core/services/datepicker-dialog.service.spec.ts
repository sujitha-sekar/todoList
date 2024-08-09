import { TestBed } from '@angular/core/testing';

import { DatepickerDialogService } from './datepicker-dialog.service';

describe('DatepickerDialogService', () => {
  let service: DatepickerDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatepickerDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
