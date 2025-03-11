import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './core/task';
import { TasksService } from './core/tasks.service';
import { TaskListItemComponent } from './shared/partials/task-list-item/task-list-item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksSvc: TasksService) {}

  ngOnInit(): void {
    this.tasksSvc.getAll().subscribe(tasks => this.tasks = tasks);
  }
}
