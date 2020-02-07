import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { SidenevmenuComponent } from '../app/components/sidenevmenu/sidenevmenu.component';
import { ResetPasswordComponent } from '../app/components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { CreatenoteComponent } from 'src/app/components/createnote/createnote.component';
import { GetAllNoteComponent } from 'src/app/components/get-all-note/get-all-note.component';

const routes: Routes = [
  
    { 
      path:'login', component:LoginComponent
    },
    { 
      path:'register', component:RegisterComponent
    }, 
    { 
      path:'dashboard', component:DashboardComponent
    },
    {
      path:'sidenav', component:SidenevmenuComponent
    },
    {
      path:'resetpassword', component:ResetPasswordComponent
    },
    {
      path:'forgetpassword', component:ForgotPasswordComponent
    },
    {
      path:'createnote', component:CreatenoteComponent
    },
    {
      path:'getallnotes', component:GetAllNoteComponent
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
