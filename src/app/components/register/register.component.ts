import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpservice:HttpService,private snackbar:MatSnackBar) 
  { }
register:Register= new Register();
registerForm:FormGroup;

name=new FormControl(this.register.name,[Validators.minLength(4)])
email= new FormControl(this.register.email,Validators.required)
password = new FormControl(this.register.password,[Validators.required, Validators.minLength(6)])
phoneNumber = new FormControl(this.register.phoneNumber,[Validators.required])
  ngOnInit() {
  }

  onRegister() {
    console.log("register")
    console.log(this.register)

    this.httpservice.postRequest('userservice/register',this.register)
    .subscribe(
      (response: any): any =>
      {
        console.log("inside on register")
        if(response.statuscode==200)
        {
          console.log(response);
          this.snackbar.open(
            "registered successfully","undo",{duration:2500}
          )
        }
        else
        {
          console.log(response);
          this.snackbar.open(
            "Registration Failed","undo", { duration:2500}
          )
        }
      }
    );
  }
}