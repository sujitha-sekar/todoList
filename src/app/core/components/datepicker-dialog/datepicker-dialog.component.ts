import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-datepicker-dialog',
  templateUrl: './datepicker-dialog.component.html',
  styleUrls: ['./datepicker-dialog.component.scss']
})
export class DatepickerDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  dateForm!: FormGroup;
  today = new Date();
  dateRespone = new EventEmitter();

  ngOnInit() {
    this.dateForm = new FormGroup({
      selectedDate: new FormControl(this.today, Validators.required)
    });
  }

  onSelect() {
    if(this.dateForm && this.dateForm.valid) {
      this.dateRespone.emit(this.dateForm.value);
    }
  }

}
