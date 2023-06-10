import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTasksComponent } from './pages/new-tasks/new-tasks.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"", redirectTo: 'login', pathMatch: 'full'},
  {path:"tasks", component: TasksComponent},
  {path:"new-tasks", component: NewTasksComponent},
  {path:"register", component: RegisterComponent},
  {path:"home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
