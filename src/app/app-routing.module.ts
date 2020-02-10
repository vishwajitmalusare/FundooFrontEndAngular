import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ResetPasswordComponent } from '../app/components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { CreatenoteComponent } from 'src/app/components/createnote/createnote.component';
import { GetAllNoteComponent } from 'src/app/components/get-all-note/get-all-note.component';
import { UpdateNoteComponent } from 'src/app/components/update-note/update-note.component';
import { IconsComponent } from 'src/app/components/icons/icons.component';
import { RestoreComponent } from 'src/app/components/restore/restore.component';
import { ArchiveComponent } from 'src/app/components/archive/archive.component';
import { TrashComponent } from 'src/app/components/trash/trash.component'


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
    },
    {
      path:'updatenote', component: UpdateNoteComponent
    },
    {
      path:'icons', component: IconsComponent
    },
    {
      path:'restoretrash', component: RestoreComponent
    },
    {
      path:'trashuntrash', component: TrashComponent
    },
    {
      path:'archiveunarchive',component:ArchiveComponent
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
