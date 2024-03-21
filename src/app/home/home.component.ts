import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  passwordForm!: FormGroup;
  passData!: Object;

  data: object[] = [];

  userEmail: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: AppService
  ) {
    this.route.queryParams.subscribe((param) => {
      this.userEmail = param['email'];
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }

  createForm() {
    this.passwordForm = this.fb.group({
      intensity: [null, Validators.required],
      words: ['', Validators.required],
    });
  }

  getData() {
    let data = {
      email: this.userEmail,
    };

    this.service.getPassword(data).subscribe((response: any) => {
      if (response.success) {
        console.log(response);
        this.data = response.passwords;
      } else {
        console.log('error', response);
      }
    });
  }

  generate() {
    let currDate = new Date();
    let date: string = currDate.toISOString().split('T')[0];

    this.passData = this.passwordForm.value;
    let pass = this.passwordForm.value;

    let data = {
      email: this.userEmail,
      intensity: pass.intensity,
      words: pass.words,
      date: date,
    };

    this.service.generatePassword(data).subscribe((response: any) => {
      if (response.success) {
        console.log(response);
        this.getData();
      } else {
        console.log('error', response);
      }
    });
  }
}
