import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:any = [];

  constructor(public authenticationService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }


  getTasks(){
    let elements:any = [];
    this.authenticationService.getTasks().subscribe({
      next:data=>{
        elements = data;
        this.tasks = elements._embedded.tasks;
      },
      error:err=>{
        this.authenticationService.logout();
        this.router.navigateByUrl("/login");
      } 
    });
  }

  onNewTask(){
    this.router.navigateByUrl("/new-tasks");
  }

}
