import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import  { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private snackbar: MatSnackBar) { }

  userService: UserService = new UserService(this.http, this.router);
  email= new FormControl('',[Validators.required, Validators.email]);
  ngOnInit() {
  }

  onForget() {
    this.userService.sendResetLink("userservice/forgetpassword?emailId="+this.email).subscribe(

      (response: any): any => {
        console.log('forgot done =>', response);

        if(response.statuscode == 200) {
          this.snackbar.open("Mail sent successfully...","close", { duration:2500 })
        }
       else {
        this.snackbar.open("Please check email id ..", "close", { duration: 2500 })
      }
      }
    )
  }
}

