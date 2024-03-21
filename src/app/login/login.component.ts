import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginData!:object

  constructor(private service: AppService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.service.createForm()
  }

  login() {
    this.loginData = this.loginForm.value;
    let data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    // console.log(this.loginData);
    // if(data.email === 'abhi@gmail.com' && data.password === '123'){
    //   this.router.navigate(['/home'], {queryParams:{email:data.email}})
    // }
    this.service
      .loginService(this.loginData)
      .subscribe((response: object) => {
        if ('success' in response) {
          if (response.success) {
            console.log(response);
            this.router.navigate(['/home'], {queryParams:{email:data.email}})
          } else {
            console.log(response, 'handle error');
          }
        }
      });
    
  }
}
