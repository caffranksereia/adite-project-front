import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuUserViewComponent } from './components/menu-user-view/menu-user-view.component';
import { ViewUserComponent } from './components/view-user/view-user.components';
import { RegisterEditViewComponent } from './components/register-edit-view/register-edit-view.component';
import { LoginUserViewComponent } from './components/login-user/login-user.component';
import { DashboardPage } from './page/dashboard/page-dashboard';
import { PageNotFound } from './page/page-error/page-error';
import { PageLogin } from './page/login/page-login';
import { PageNotfoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/message/modal/modal.component';
import { LogOutComponent } from './components/message/logout/logout.component';
import { MessageLogOutComponent } from './components/message/logout/component/message_logout.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuUserViewComponent,
    ViewUserComponent,
    ModalComponent,
    LogOutComponent,
    RegisterEditViewComponent,
    LoginUserViewComponent,
    PageNotfoundComponent,
    MessageLogOutComponent,
    PageLogin,
    PageNotFound,
    DashboardPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
