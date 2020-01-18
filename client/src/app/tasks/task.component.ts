import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'task.component.html',
  providers: [TaskService]
})


export class TaskComponent implements OnInit {

  tasks: Task[];
  task: Task;
  taskTitle: string;
  isDone: boolean;


  constructor(private taskService: TaskService) { }

  
  ngOnInit() {
    this.taskService.getTasks()
    .subscribe( tasks => 
      this.tasks = tasks);

  }

 }