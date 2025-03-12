import { Component, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Task } from '../../../core/task';
import { TasksService } from '../../../core/tasks.service';

@Component({
  selector: 'app-edit-task',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})
export class EditTaskComponent {
  id = input.required<string>();
  form = new FormGroup({
    id: new FormControl<string>(''),
    description: new FormControl<string>('', Validators.required),
    isDone: new FormControl<boolean>(false),
  });

  constructor(private tasksSvc: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.tasksSvc.getById(this.id()).subscribe((task) => {
      if (task) this.form.patchValue(task);
    });
  }

  get description(): FormControl<string> {
    return this.form.get('description') as FormControl<string>;
  }

  onSave() {
    this.tasksSvc.updateTask(this.form.value as Task).subscribe(() => {
      this.router.navigate(['../..']);
    });
  }

  onAbort() {
    this.router.navigate(['../..']);
  }
}
