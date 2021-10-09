import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardComponent } from './components/guard/guard.component';
import { SpacesControlComponent } from './components/spaces-control/spaces-control.component';

const guardRoutes: Routes = [
  { path: '',
    component: GuardComponent,
    // canActivate: [AuthGuard],
  children: [
    {
      path: '',
      // canActivateChild: [AuthGuard],
      children: [
       { path: 'busquedaPersonas', component: SpacesControlComponent },
      //   { path: "materias", component: CMateriasComponent },
      //   { path: "departamentos", component: ADepartamentosComponent },
      //   { path: "semestres", component: ASemestresComponent },
      ],
    },
  ], }
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