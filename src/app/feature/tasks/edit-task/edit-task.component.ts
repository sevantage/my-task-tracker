import { Component, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../../../core/task';
import { TasksService } from '../../../core/tasks.service';

@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule],
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

  get description() {
    return this.form.get("description") as FormControl<string>;
  }

  onSave() {
    this.tasksSvc.updateTask(this.form.value as Task).subscribe(() => {
      this.router.navigate(['../..']);
    });
  }
}
