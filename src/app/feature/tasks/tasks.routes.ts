import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const tasksRoutes: Routes = [
  {
    path: ':id',
    component: TaskDetailsComponent,
  },
  {
    path: '',
    component: TasksListComponent,
  },
];
