import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'rh', loadComponent: () => import('./rh-dashboard/rh-dashboard.component').then(m => m.RhDashboardComponent) },
];
