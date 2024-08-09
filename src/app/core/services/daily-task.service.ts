import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class DailyTaskService {

  constructor(private httpService: HttpRoutingService) { }

  getAllTask() {
    return this.httpService.getMethod('getAllTask')
  }

  createNewTask(data: any) {
    return this.httpService.postMethod('createNewTask' , data);
  }
}
