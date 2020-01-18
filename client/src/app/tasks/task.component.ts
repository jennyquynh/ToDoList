import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
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
  task: string;


  constructor(private taskService: TaskService) { }


  //delete task
  deleteTask(id: any)
  {
    var tasks = this.tasks;

    this.taskService.deleteTask(id)
    .subscribe(data => {
      if(data.n == 1)
      {
        for(var i = 0; i < tasks.length; i++)
        {
          if(tasks[i].__id == id)
          {
            tasks.splice(i, 1);
          }
        }

        this.taskService.getTasks()
        .subscribe( tasks => 
          this.tasks = tasks);
      }
    })
  }


  //add tast
  addTask()
  {
    const newTask = {
      task: this.task
    }

    this.taskService.addTask(newTask)
    .subscribe(task => {
      this.tasks.push(task);

      this.taskService.getTasks()
    .subscribe( tasks => 
      this.tasks = tasks);
    })
  }

  
  ngOnInit() {
    this.taskService.getTasks()
    .subscribe( tasks => 
      this.tasks = tasks);

  }

 }