import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {UserModule} from './user.module'
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [{path: 'user', component:UserModule},
{path:'home',component:HomeComponent},
{path:'login',
component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
