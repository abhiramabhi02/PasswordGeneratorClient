import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;
  regData!: object;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.regForm = this.service.createForm();
  }

  register() {
    this.regData = this.regForm.value;
    console.log(this.regData);
    this.service
      .registrationService(this.regData)
      .subscribe((response: object) => {
        if ('success' in response) {
          if (response.success) {
            console.log(response);
          } else {
            console.log(response, 'handle error');
          }
        }
      });
  }
}
