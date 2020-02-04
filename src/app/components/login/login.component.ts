import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/Model/login';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private httpService:HttpService,
    private snackbar:MatSnackBar,
    private route:ActivatedRoute
  ) { }

  login:Login= new Login();
  token:string

  ngOnInit() {

    this.token = this.route.snapshot.paramMap.get('token');
  }
  email = new FormControl(this.login.email, Validators.required)
  password = new FormControl(this.login.password, Validators.required);

  onLogin(){
    console.log("Inside login method");
    this.token = localStorage.getItem(this.token);
    this.httpService.postRequest('userservice/login', this.login).subscribe(
      (response: any): any => 
      {
        if(response.statuscode==200) {
          console.log(response);
          localStorage.setItem('token',response.data);
          localStorage.setItem('name',response.name);
          localStorage.setItem('email',this.login.email);
          this.snackbar.open("login successfully","close",{duration:2500})
          console.log("Successfully logged in");
        }
        else {
          this.snackbar.open("Invalid username or password","close",{duration:2500})
        }
      }
    )
  }
}