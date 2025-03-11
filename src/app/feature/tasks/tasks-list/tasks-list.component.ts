import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/task';
import { TasksService } from '../../../core/tasks.service';
import { TaskListItemComponent } from '../../../shared/partials/task-list-item/task-list-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskListItemComponent, RouterLink],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksSvc: TasksService) {}

  ngOnInit(): void {
    this.tasksSvc.getAll().subscribe((tasks) => (this.tasks = tasks));
  }
}
