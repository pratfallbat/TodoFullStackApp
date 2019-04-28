import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './compo/login/login.component';
import {FormsModule} from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './compo/welcome/welcome.component';
import { ListTodosComponent } from './compo/list-todos/list-todos.component';
import { MenuComponent } from './compo/menu/menu.component';
import { FooterComponent } from './compo/footer/footer.component';
import { LogoutComponent } from './compo/logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodosComponent } from './compo/todos/todos.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    WelcomeComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
,FormsModule,
HttpClientModule
  ],
  providers: [
 {provide: HTTP_INTERCEPTORS,useClass: HttpIntercepterBasicAuthService,multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
