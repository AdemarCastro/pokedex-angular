import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'A. Castro - Pokedex',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((h) => h.HomeModule),
  }
];
