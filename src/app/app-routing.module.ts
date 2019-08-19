import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './myComponent/log-in/log-in.component';
import { RegisterComponent } from './myComponent/register/register.component';
import { ForgetPassComponent } from './myComponent/forget-pass/forget-pass.component';
import { DashboardComponent } from './myComponent/dashboard/dashboard.component';
import { UsersComponent } from './myComponent/users/users.component';
import { ModuelsComponent } from './myComponent/moduels/moduels.component';
import { ChartsComponent } from './myComponent/charts/charts.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LogInComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgetpassword',component: ForgetPassComponent},
  {path:'dashboard',component: DashboardComponent,children:[
    {path:'', redirectTo:'charts',pathMatch:'full'},
    {path:'charts',component: ChartsComponent},
    {path:'users' ,component:UsersComponent},
    {path:'module',component: ModuelsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
