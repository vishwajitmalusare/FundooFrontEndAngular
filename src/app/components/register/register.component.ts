import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/Model/register';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private http: HttpClient, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() { }

  register: Register = new Register();
  userService: UserService = new UserService(this.http, this.router);
  name = new FormControl ('',[Validators.required, Validators.minLength(5)]);
  email = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);
  phoneNumber = new FormControl('',[Validators.required]);
  
  onRegister() {
    this.userService.usreRegister(this.register).subscribe(

      (response: any): any => {
        if(response.statusCode == 201) {
          console.log(response);
          this.snackbar.open("register successfully...","undo", { duration:2500 })
        }
        else {
          console.log(response);
          this.snackbar.open("Registration Failed","undo", {duration:2500} )
        }
      }
    )   
  }
}