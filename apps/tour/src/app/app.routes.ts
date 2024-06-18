import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () => import('@wrkspc/admin').then((m) => m.AdminModule),
  },
  {
    path: 'tour',
    loadChildren: () => import('@wrkspc/visitor').then((m) => m.VisitorModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour',
  },
];
