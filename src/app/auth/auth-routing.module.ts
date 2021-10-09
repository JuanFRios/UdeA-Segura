import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const loginRoutes: Routes = [
  { path: 'inicio', component: LoginComponent },
  { path: 'nuevo-usuario', component: NewUserComponent}
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