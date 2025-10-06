import { Routes } from '@angular/router';
import {Home} from './home/home';
import {NotFound} from './not-found/not-found';

export const routes: Routes = [
  // EAGER
  { path: '', component: Home },

  // LAZY
  {
    path: 'placeholders',
    loadComponent: () =>
      import('./placeholders/placeholders-home/placeholders-home').then(m => m.PlaceholdersHome),
  },

  {
    path: 'tables',
    loadComponent: () =>
      import('./tables/tables-home/tables-home').then((m) => m.TablesHome),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./tables/biography/biography').then((m) => m.Biography),
      },
      {
        path: 'companies',
        loadComponent: () =>
          import('./tables/companies/companies').then((m) => m.Companies),
      },
      {
        path: 'partners',
        loadComponent: () =>
          import('./tables/partners/partners').then((m) => m.Partners),
      },
    ],
  },

  // EAGER
  { path: '**', component: NotFound },
];
