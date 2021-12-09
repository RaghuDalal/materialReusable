import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessagesComponent } from 'src/app/shared/component/dialog-messages/dialog-messages.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  setUpForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(22)
      ])
    });
  }

  ngOnInit(): void {
    this.setUpForm();
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.valid) {
      let formValue = this.loginForm.value;
      if (
        formValue.email == 'material@yopmail.com' &&
        formValue.password == '12345678'
      ) {
        sessionStorage.setItem('materialReusableToken', JSON.stringify(true));
        this.router.navigate(['/home']);
      } else {
        this.dialog.open(DialogMessagesComponent, {
          data: {
            heading: 'Error',
            subHeading:'Username or password is wrong'
          }
        });
        this.loginForm.reset();
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
