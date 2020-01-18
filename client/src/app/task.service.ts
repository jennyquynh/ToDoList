import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from './task';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService {

    constructor(private http: Http) { }

    //retrieve task
    getTasks()
    {
        return this.http.get('http://localhost:5000/api/tasks')
        .map(res => res.json());
    }

    //add task
    addTask(newTask: Task)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:5000/api/task', newTask, {headers:headers})
        .map(res => res.json());
    }

    //delete task
    deleteTask(id: string)
    {
        return this.http.delete('http://localhost:5000/api/contact/' + id)
        .map(res => res.json());
    }
}