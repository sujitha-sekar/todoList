import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { ListsComponent } from './core/components/lists/lists.component';
import { TodayComponent } from './core/components/today/today.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'lists', component: ListsComponent},
    { path: 'today', component: TodayComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
