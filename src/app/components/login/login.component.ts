import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: any;

  login: FormGroup = new FormGroup({ 
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  
  hide = true;
  get usernameInput() { return this.login.get('username'); }
  get passwordInput() { return this.login.get('password'); }


  Currentnav: string = '';
  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  newClass(current:string){

    this.Currentnav = current;
    this.routes.navigateByUrl('/home');
  }

}
