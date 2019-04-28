import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './compo/login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './compo/welcome/welcome.component';
import { ListTodosComponent } from './compo/list-todos/list-todos.component';
import { LogoutComponent } from './compo/logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodosComponent } from './compo/todos/todos.component';

const routes: Routes = [
  {path:'',component: LoginComponent},//activate on condition-routegurard
  {path:'login',component: LoginComponent},
  {path:'welcome/:name',component: WelcomeComponent,canActivate: [ RouteGuardService]},
  {path:'todos',component: ListTodosComponent,canActivate: [ RouteGuardService]},
  {path:'todos/:id',component: TodosComponent,canActivate: [ RouteGuardService]},

  {path:'logout',component: LogoutComponent},

{path:'**',component: ErrorComponent}





];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
