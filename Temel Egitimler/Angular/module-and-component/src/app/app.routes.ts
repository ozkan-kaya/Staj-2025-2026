import { Routes } from '@angular/router';
import {Home} from './home/home';
import {NotFound} from './not-found/not-found';

export const routes: Routes = [
  // LAZY
  {
    path: 'placeholders',
    loadChildren: () =>
      import('./placeholders/placeholders-module').then(m => m.PlaceholdersModule),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables-module').then(m => m.TablesModule),
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('./lists/lists-module').then(m => m.ListsModule),
  },
  {
    path: 'popups',
    loadChildren: () =>
      import('./popups/popups-module').then(m => m.PopupsModule),
  },

  // EAGER
  { path: '', component: Home },
  { path: '**', component: NotFound },
];
