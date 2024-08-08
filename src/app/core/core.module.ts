import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListsComponent } from './components/lists/lists.component';
import { DatepickerDialogComponent } from './components/datepicker-dialog/datepicker-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ListsComponent,
    DatepickerDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
