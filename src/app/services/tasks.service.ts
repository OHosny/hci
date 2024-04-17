import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Task[] = [
    {
      title:"First Task",
      description:"First task description",
    },
    {
      title:"os Task",
      description:"First os task description",
    }
  ]
  constructor() { }

  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
  saveTask(title:any,description:any)
  {
   this.tasks.push({
     title:title,
     description:description
     
   })
  }
}