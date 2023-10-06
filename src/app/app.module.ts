import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PsychologistListComponent } from './components/psychologist/psychologist-list/psychologist-list.component';
import { PsychologistCreateComponent } from './components/psychologist/psychologist-create/psychologist-create.component';
import { PsychologistDeleteComponent } from './components/psychologist/psychologist-delete/psychologist-delete.component';
import { PsychologistUpdateComponent } from './components/psychologist/psychologist-update/psychologist-update.component';
import { SessionCreateComponent } from './components/session/session-create/session-create.component';
import { SessionDeleteComponent } from './components/session/session-delete/session-delete.component';
import { SessionListComponent } from './components/session/session-list/session-list.component';
import { SessionUpdateComponent } from './components/session/session-update/session-update.component';
import { PatienteCreateComponent } from './components/patiente/patiente-create/patiente-create.component';
import { PatienteUpdateComponent } from './components/patiente/patiente-update/patiente-update.component';
import { PatienteListComponent } from './components/patiente/patiente-list/patiente-list.component';
import { PatienteDeleteComponent } from './components/patiente/patiente-delete/patiente-delete.component';
import { LoginComponent } from './components/login/login.component';
import {ToastrModule} from "ngx-toastr";



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    PsychologistListComponent,
    PsychologistCreateComponent,
    PsychologistDeleteComponent,
    PsychologistUpdateComponent,
    SessionCreateComponent,
    SessionDeleteComponent,
    SessionListComponent,
    SessionUpdateComponent,
    PatienteCreateComponent,
    PatienteUpdateComponent,
    PatienteListComponent,
    PatienteDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }