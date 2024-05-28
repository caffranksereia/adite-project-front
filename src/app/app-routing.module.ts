import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLogin } from './page/login/page-login';
import { DashboardPage } from './page/dashboard/page-dashboard';
import { RegisterEditViewComponent } from './components/register-edit-view/register-edit-view.component';
import { PageNotfoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login', component: PageLogin},
  {path:'dashboard', component:DashboardPage},
  {path: ':id/register-edit', component: RegisterEditViewComponent},
  {path: '', pathMatch:'full',  redirectTo: 'login'},
  {path:'**', component: PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
