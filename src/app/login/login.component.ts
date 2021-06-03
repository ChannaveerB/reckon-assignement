import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isValidFormSubmitted = null;

  constructor(private fb: FormBuilder, private router: Router) { this.createForm();}

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.
        pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]*$')])],
      password: ['', Validators.compose([Validators.required, Validators.
        pattern('^(?=.{8,})(?=.*[^a-zA-Z\s])((?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z]))(?=.*[0-9]).*$'), Validators.min(8)])],
    });
  }

  

  login() {
        if (this.loginForm.invalid) {
      this.isValidFormSubmitted = true;
      return;
    }
    else {
      // alert("else");
      if(this.loginForm.value.password === "Password@123" && this.loginForm.value.email === "channu@email.com"){
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', 'channu');
        this.router.navigate(['/dashboard']);
        console.log("loged in success");
      } else {
        alert("please check the input credentials")
      }
    }
  }

}
