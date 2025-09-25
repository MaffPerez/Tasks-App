import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private API_URL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URL, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.API_URL}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}