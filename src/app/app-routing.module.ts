import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import {HomeComponent} from "./components/home/home.component";
import {PsychologistListComponent} from "./components/psychologist/psychologist-list/psychologist-list.component";
import {PsychologistCreateComponent} from "./components/psychologist/psychologist-create/psychologist-create.component";
import {PsychologistDeleteComponent} from "./components/psychologist/psychologist-delete/psychologist-delete.component";
import {PsychologistUpdateComponent} from "./components/psychologist/psychologist-update/psychologist-update.component";
import {SessionListComponent} from "./components/session/session-list/session-list.component";
import {SessionCreateComponent} from "./components/session/session-create/session-create.component";
import {SessionUpdateComponent} from "./components/session/session-update/session-update.component";
import {SessionDeleteComponent} from "./components/session/session-delete/session-delete.component";
import {PatienteListComponent} from "./components/patiente/patiente-list/patiente-list.component";
import {PatienteUpdateComponent} from "./components/patiente/patiente-update/patiente-update.component";
import {PatienteDeleteComponent} from "./components/patiente/patiente-delete/patiente-delete.component";
import {PatienteCreateComponent} from "./components/patiente/patiente-create/patiente-create.component";

const routes: Routes = [
  {
    path: '',
    component: NavComponent, children:[
      {path: 'home', component: HomeComponent},
      {path: "psychologists", component: PsychologistListComponent},
      {path: "psychologists/create", component: PsychologistCreateComponent},
      { path: 'psychologists/update/:id', component: PsychologistUpdateComponent },
      { path: 'psychologists/delete/:id', component: PsychologistDeleteComponent },

      { path: 'patients',            component:   PatienteListComponent },
      { path: 'patients/create',     component: PatienteCreateComponent },
      { path: 'patients/update/:id', component: PatienteUpdateComponent },
      { path: 'patients/delete/:id', component: PatienteDeleteComponent },

      { path: 'sessions',                       component:     SessionListComponent },
      { path: 'sessions/create',                component:   SessionCreateComponent },
      { path: 'sessions/update/:id',            component:   SessionUpdateComponent },
      { path: 'sessions/read/:id',              component:     SessionDeleteComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }