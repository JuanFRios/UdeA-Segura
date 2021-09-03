import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const loginRoutes: Routes = [
  { path: 'inicio', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // AuthGuard,
    // LoginService
  ]
})
export class AuthRoutingModule { }