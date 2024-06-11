import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { ListsComponent } from './core/components/lists/lists.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'lists', component: ListsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
