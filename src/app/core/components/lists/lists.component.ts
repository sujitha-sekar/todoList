import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DatepickerDialogComponent } from '../datepicker-dialog/datepicker-dialog.component';
import { DailyTaskService } from '../../services/daily-task.service';

interface TaskList {
  taskName: string;
  priority: string;
  status: boolean;
  taskDate: Date;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  selectedDay: any;
  today = new Date();
  taskList: TaskList[] = [];

  constructor(private dialog: MatDialog,
    private dailyTaskService: DailyTaskService
  ) { }

  ngOnInit(): void {
    this.dailyTaskService.getAllTask().subscribe((res: any) => {
      if (res)
        this.taskList = res && res.tasklists;
      console.log('list: ', this.taskList)
    });
  }

  chooseDay() {
    const dialogRef = new MatDialogConfig();
    dialogRef.width = "500px";
    const dialogRes = this.dialog.open(DatepickerDialogComponent, dialogRef);
    dialogRes.componentInstance.dateRespone.subscribe((res) => {
      this.today = res && res.selectedDate;
      console.log('res: ', res);
    })
  }

}
