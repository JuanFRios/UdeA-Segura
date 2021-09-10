import { Routes } from '@angular/router';
export const routes: Routes = [
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'vigilante',
    loadChildren: () =>
      import('./guard/guard.module').then(
        (m) => m.GuardModule
      ),
    // canLoad: [AuthGuard],
    data: { preload: false },
  },
  {
    path: 'visitor',
    loadChildren: () =>
      import('./visitor/visitor.module').then(
        (m) => m.VisitorModule
      ),
    // canLoad: [AuthGuard],
    data: { preload: false },
  },
//   {
//     path: 'profesor',
//     loadChildren: () =>
//       import('../profesores/profesores.module').then((m) => m.ProfesoresModule),
//     canLoad: [AuthGuard],
//     data: { preload: false },
//   },
//   {
//     path: 'vicedecano',
//     loadChildren: () =>
//       import('../vicedecano/vicedecano.module').then((m) => m.VicedecanoModule),
//     canLoad: [AuthGuard],
//     data: { preload: false },
//   },
//   {
//     path: 'jefeDepartamento',
//     loadChildren: () =>
//       import('../jefe-departamento/jefe-departamento.module').then((m) => m.JefeDepartamentoModule),
//     canLoad: [AuthGuard],
//     data: { preload: false },
//   },
//   {
//     path: 'publico',
//     loadChildren: () =>
//       import('../publico/publico.module').then((m) => m.PublicoModule),
//     data: { preload: false },
//   },
];
