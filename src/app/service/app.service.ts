import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  loginService(data: Object) {
    let url = environment.BASE_URL + environment.LOGIN;

    return this.http.post(url, data);
  }

  registrationService(data: Object) {
    let url = environment.BASE_URL + environment.REGISTRATION;

    return this.http.post(url, data);
  }

  getPassword(email: Object) {
    let url = environment.BASE_URL + environment.GET_PASSWORDS;

    return this.http.post(url, email);
  }

  generatePassword(data: object) {
    let url = environment.BASE_URL + environment.GENERATE_PASSWORD;

    return this.http.post(url, data);
  }
}
