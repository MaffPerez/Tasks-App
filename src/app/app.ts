import { Component, signal } from '@angular/core';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskList],
  templateUrl: './app.html'
})
export class App {}
