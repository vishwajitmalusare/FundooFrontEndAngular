import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { GetAllNoteComponent } from './components/get-all-note/get-all-note.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { IconsComponent } from './components/icons/icons.component';
import { RestoreComponent } from './components/restore/restore.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    CreatenoteComponent,
    GetAllNoteComponent,
    UpdateNoteComponent,
    IconsComponent,
    RestoreComponent,
    TrashComponent,
    ArchiveComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
