import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private snackbar: MatSnackBar) { }

  userService: UserService = new UserService(this.http, this.router);
  email: string;
  password: string;
  confirmPassword: string;
  ngOnInit() {
  }

  onReset() {
    if(this.password == this.confirmPassword) {
      this.userService.userLogin('/resetpassword?password='+this.confirmPassword).subscribe(

        (response: any): any => {
          if (response.statuscode == 200) {
            localStorage.setItem('token',response.token);
            this.snackbar.open("Password reset successfully..", "close", { duration: 2500 })
          }
        }
      )
    }
    else {
this.snackbar.open("password not matched..","close",{ duration: 2500 })
    }
  }
}