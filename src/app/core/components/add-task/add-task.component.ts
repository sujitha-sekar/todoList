import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DailyTaskService } from '../../services/daily-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{

  taskForm!: FormGroup;
  taskPriority: string[] = ['High', 'Medium', 'Low'];
  taskList = new EventEmitter();

  constructor(private dailyTaskService: DailyTaskService) {}

  ngOnInit(): void {
      this.taskForm = new FormGroup({
        taskName: new FormControl(null, Validators.required),
        priority: new FormControl(null, Validators.required)
      });
  }

  addTask() {
    if(this.taskForm && this.taskForm.valid) {
      this.dailyTaskService.createNewTask(this.taskForm.value).subscribe((res) => {
        if(res) {
          this.taskList.emit(res);
        }
    });
    }
  }

}
