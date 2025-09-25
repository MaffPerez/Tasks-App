import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html'
})
export class TaskFormComponent {
  @Output() add = new EventEmitter<Task>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid) return;

    const today = new Date();
    const formattedDate = today.toISOString();

    const newTask: Task = {
      ...this.taskForm.value,
      date: formattedDate,
      completed: false,
    };

    this.add.emit(newTask);
    this.taskForm.reset();
  }
}
