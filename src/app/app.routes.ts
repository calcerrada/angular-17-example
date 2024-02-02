import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'scorekeeper',
    loadComponent: () =>
      import('./views/position-list/position-list.view').then(
        (v) => v.PositionListComponent
      ),
  },
  {
    path: 'start',
    loadComponent: () =>
      import('./views/start/start.view').then(
        (v) => v.StartComponent
      ),
  },
];
