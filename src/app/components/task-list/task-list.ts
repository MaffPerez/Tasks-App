import { Component } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList  {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(newTask => {
      this.tasks.push(newTask);
    });
  }

  completeTask(task: Task): void {
    const updated = { ...task, completed: !task.completed };
    this.taskService.updateTask(updated).subscribe(() => {
      task.completed = updated.completed;
    });
  }

  deleteTask(task: Task): void {
    if (!task.id) return;
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
}