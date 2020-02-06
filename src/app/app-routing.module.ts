import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { SidenevmenuComponent } from '../app/components/sidenevmenu/sidenevmenu.component';

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
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
