import { Component, OnInit } from '@angular/core';
import { DailyTaskService } from '../../services/daily-task.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

interface TaskList {
  taskName: string;
  priority: string;
}

interface FormatTask {
  taskName: string;
  priority: string;
  date: Date;
  complete: boolean;
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  todayTasks: TaskList[] = [];
  formatTask: FormatTask[] = [];
  today = new Date();
  todayForm!: FormGroup;

  constructor(private dailyTaskService: DailyTaskService) { }

  ngOnInit(): void {
    this.dailyTaskService.getAllTask().subscribe((res: any) => {
      if (res) {
        this.todayTasks = res && res.tasklists;
        this.loadForm();
      }
    });

    this.todayForm = new FormGroup({
      allTask: new FormArray([])
    });
  };


  loadForm() {
    if (this.todayTasks && this.todayTasks.length) {
      this.todayTasks.forEach((task) => {
        if (this.todayForm.get('allTask')) {
          (this.todayForm.get('allTask') as FormArray).push(new FormGroup({
            taskName: new FormControl(task.taskName),
            priority: new FormControl(task.priority),
            complete: new FormControl(false)
          }));
          this.dailyTaskService.createTodayTask(this.todayTasks).subscribe((res) => {
            console.log('res: ', res);
          });
        }
      })
    }
  }

  formatData(data: any) {
    if (data && Array.isArray(data)) {
      this.formatTask = data.map((item: any) => ({
        taskName: item.taskName,
        priority: item.priority,
        complete: item.complete,
        date: this.today
      }));
    }
  }

  onSave() {
    if (this.todayForm.valid) {
      const formValues = this.todayForm.value.allTask;
      this.formatData(formValues);
    } else {
      console.error('Form is invalid');
    }
  }
}
