import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatepickerDialogComponent } from '../components/datepicker-dialog/datepicker-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DatepickerDialogService {

  todayDate = new Date();

  constructor(private dialog: MatDialog) { }

  openDialog(selectedDate: any) {
    const dialogRef = this.dialog.open(DatepickerDialogComponent, {
      data: {
        width: '500px',
        selectedDate: selectedDate ? selectedDate : this.todayDate
      },
      autoFocus: false
    });
    return dialogRef;
  }
}
