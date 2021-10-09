import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SearchComponent } from './components/search/search.component';

// import { AuthGuard } from "../auth/auth-guard.service";
import { VisitorComponent } from './components/visitor/visitor.component';

const visitorRoutes: Routes = [
  {
    path: "",
    component: VisitorComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        // canActivateChild: [AuthGuard],
        children: [
         { path: "espacios", component: SearchComponent },
         { path: "visitas", component: AppointmentComponent },
        //   { path: "materias", component: CMateriasComponent },
        //   { path: "departamentos", component: ADepartamentosComponent },
        //   { path: "semestres", component: ASemestresComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(visitorRoutes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}
