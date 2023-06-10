import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormProcessService } from 'src/app/services/process/form-process.service';
import { AuthenticationService } from 'src/app/services/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  loading: boolean = false;
  mode:number = 0;

  constructor(private formProcessService:FormProcessService,
    private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formProcessService.getLoginForm();
  }

  get f() {
    return this.form.controls;
  }

  login(){
    this.submitted = true;
    if (this.form.valid) {
      this.authenticationService.login(this.form.value).subscribe({
        next: (response) => {
          let jwt = response.headers.get('Authorization');
          this.authenticationService.saveToken(jwt);
          this.mode = 0;
          this.router.navigateByUrl('/home');
        },
        error: err=>{
          console.log(err);
          this.mode = 1;
        }
      });
    }
  }

}
