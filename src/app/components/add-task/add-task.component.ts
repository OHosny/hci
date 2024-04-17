import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  constructor(public tasksService:TasksService,private router:Router){}
  ngOnInit(): void {
    
  }
 saveTask(title:any,description:any)
 {
  this.tasksService.saveTask(title.value,description.value)
  this.router.navigate(['/'])

 }
}
