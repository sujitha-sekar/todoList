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
        console.log('todaytasks: ', this.todayTasks);
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
          }))
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
      this.dailyTaskService.createTodayTask(this.formatTask).subscribe((res) => {
        console.log('res: ', res);
      });
      console.log('formatted data:', this.formatTask);
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
