import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './core/Task';
import { TaskListItemComponent } from './shared/partials/task-list-item/task-list-item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-task-tracker';
  tasks: Task[] = [
    { id: 123, description: 'Task 1', isOpen: true },
    { id: 246, description: 'Task 2', isOpen: false },
    { id: 369, description: 'Task 3', isOpen: true },
  ];
}
