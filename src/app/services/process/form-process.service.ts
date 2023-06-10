import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormProcessService {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  getLoginForm(){
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    return this.form;
  }

  

}
