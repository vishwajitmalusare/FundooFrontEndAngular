import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/Model/login';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private snackbar: MatSnackBar, private http: HttpClient) { }
  
  login: Login = new Login();
  userService: UserService = new UserService(this.http, this.router);

  email= new FormControl('',[Validators.required, Validators.email]);
  password= new FormControl('',[Validators.required, Validators.maxLength(15)]);
  ngOnInit() { }

  onLogin() {
    this.userService.userLogin(this.login).subscribe(
      
      (response: any): any => {
        console.log(response)
        if(response.statuscode == 200) {
          console.log(response);
          localStorage.setItem('token',response.token);
          localStorage.setItem('name', response.statusMessage);
          localStorage.setItem('email', this.login.email);
          this.snackbar.open("Login successfull...","close", { duration: 2500} )
          console.log("Successfully logged in");
          this.router.navigateByUrl('/dashboard')
        }
        else {
          this.snackbar.open("Invalid username or password", "close", { duration: 2500 })
        }
      }
    )
  }
}