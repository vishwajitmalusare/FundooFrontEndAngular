import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';

const routes: Routes = [
  
    { 
      path:'login', component:LoginComponent
    },
    { 
      path:'register', component:RegisterComponent
    }, 
    { 
      path:'dashboard', component:DashboardComponent
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
