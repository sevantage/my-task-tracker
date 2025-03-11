import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const tasksRoutes: Routes = [
  {
    path: ':id/edit',
    component: EditTaskComponent,
  },
  {
    path: ':id',
    component: TaskDetailsComponent,
  },
  {
    path: '',
    component: TasksListComponent,
  },
];
