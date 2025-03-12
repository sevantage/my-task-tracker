import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Task } from '../../../core/task';
import { TasksService } from '../../../core/tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [
    RouterLink,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns = ['isDone', 'description', 'actions'];

  constructor(private tasksSvc: TasksService) {}

  ngOnInit(): void {
    this.tasksSvc.getAll().subscribe((tasks) => (this.tasks = tasks));
  }
}
