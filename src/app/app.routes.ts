import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () =>
      import('./feature/tasks/tasks.routes').then((m) => m.tasksRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks',
  },
];
