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
    path: 'visitante',
    loadChildren: () =>
      import('./visitor/visitor.module').then(
        (m) => m.VisitorModule
      ),
    // canLoad: [AuthGuard],
    data: { preload: false },
  },
];
