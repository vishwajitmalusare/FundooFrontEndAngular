import { NgModule, Component } from '@angular/core';
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
import { TrashComponent } from 'src/app/components/trash/trash.component';
import { NoteComponent } from 'src/app/components/note/note.component';

const routes: Routes = [
  
    { 
      path:'login', component:LoginComponent
    },
    { 
      path:'register', component:RegisterComponent
    },
    {
      path:'resetpassword', component:ResetPasswordComponent
    },
    {
      path:'forgetpassword', component:ForgotPasswordComponent
    }, 
    { 
      path:'dashboard', component:DashboardComponent,

      children:[
        {
          path:'note', component: NoteComponent
        },
        {
          path:'gettrash', component: TrashComponent
        },
        {
          path:'getarchive',component:ArchiveComponent
        }
      ]
      /*This are individual component for testItsWorking*/
    },
    {
      path:'icons', component: IconsComponent
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
      path:'restoretrash', component: RestoreComponent
    },
    {
      path:'gettrash', component: TrashComponent
    },
    {
      path:'getarchive',component:ArchiveComponent
    },
    {
      path:'note', component: NoteComponent
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }