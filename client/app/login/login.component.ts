import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .loginbackground {
      background-image: url("/assets/Images/logincar.png");
      background-color: #cccccc;
      background-size: cover;
      height: 100vh;
    }
    .card {
      position:absolute;
      width: 500px;
      margin: 0 auto;
      top: 35%;
      left: 15%;
      right: 15%;
    }
    .register{
      float: right;
    }
  `]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent) { }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        console.log("successfully logged in...");
        this.router.navigate(['/master/dashboard']);
      },
      error => this.toast.setMessage('invalid email or password!', 'danger')
    );
  }

}
