import { Component, input, OnInit } from '@angular/core';
import { TasksService } from '../../../core/tasks.service';
import { Task } from '../../../core/task';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-details',
  imports: [MatCardModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent implements OnInit {
  id = input.required<string>();
  task?: Task;

  constructor(private tasksSvc: TasksService) {}

  ngOnInit(): void {
    this.tasksSvc.getById(this.id()).subscribe(task => this.task = task);
  }
}
