import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DatepickerDialogComponent } from '../datepicker-dialog/datepicker-dialog.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

  selectedDay:any;

  constructor(private dialog: MatDialog) {}

  array = [
    { taskName: 'Exercise', priority: 'High', status: true, img: '../../../../assets/read.png'},
    { taskName: 'Exercise', priority: 'High', status: true, img: '../../../../assets/read.png'},
    { taskName: 'Exercise', priority: 'High', status: true, img: '../../../../assets/read.png'},
    { taskName: 'Exercise', priority: 'High', status: true, img: '../../../../assets/read.png'},
    { taskName: 'Exercise', priority: 'High', status: true, img: '../../../../assets/read.png'}
  ]

  chooseDay() {
    const dialogRef = new MatDialogConfig();
    dialogRef.width = "500px";
    const dialogRes = this.dialog.open(DatepickerDialogComponent, dialogRef);
    dialogRes.componentInstance.dateRespone.subscribe((res) => {
      this.selectedDay = res.selectedDate;
      console.log('res: ', res);
    })
  }

}
