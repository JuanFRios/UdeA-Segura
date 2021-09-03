import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardComponent } from './components/guard/guard.component';

const guardRoutes: Routes = [
  { path: '', component: GuardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(guardRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // AuthGuard,
    // LoginService
  ]
})
export class GuardRoutingModule { }