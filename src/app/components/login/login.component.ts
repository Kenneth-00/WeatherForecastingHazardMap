import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;

  login: FormGroup = new FormGroup({ 
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(3)])
  })
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get emailInput() { return this.login.get('email'); }
  get passwordInput() { return this.login.get('password'); }

  hide = true;
  Currentnav: string = '';
  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  newClass(current:string){

    this.Currentnav = current;
    this.routes.navigateByUrl('/home')
  }

}
