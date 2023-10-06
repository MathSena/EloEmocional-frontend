import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Session} from "../../../models/session";
import {Patiente} from "../../../models/patiente";
import {Psychologist} from "../../../models/psychologist";
import {SessionService} from "../../../services/session.service";
import {PatienteService} from "../../../services/patiente.service";
import {PsychologistService} from "../../../services/psychologist.service";


@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent implements OnInit {

  session: Session = {
    title: '',
    sessionDate: '',
    sessionCreationDate: '',
    notes: '',
    status: '',
    psychologist: '',
    patiente: '',
    psychologistName: '',
    patienteName: '',
  }


  patientes: Patiente[] = []
  psychologists: Psychologist[] = []


  status:     FormControl = new FormControl(null, [Validators.required]);
  titulo:     FormControl = new FormControl(null, [Validators.required]);
  observacoes: FormControl = new FormControl(null, [Validators.required]);
  psychologist:    FormControl = new FormControl(null, [Validators.required]);
  patiente:    FormControl = new FormControl(null, [Validators.required]);

  constructor(
      private sessionService: SessionService,
      private patienteService: PatienteService,
      private psychologistService: PsychologistService,
      private toastService:    ToastrService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAllPatientes();
    this.findAllPsychologists();
  }

  create(): void {
    this.sessionService.create(this.session).subscribe(resposta => {
      this.toastService.success('Session criado com sucesso', 'Novo session');
      this.router.navigate(['sessions']);
    }, ex => {
      console.log(ex);

      this.toastService.error(ex.error.error);
    })
  }

  findAllPatientes(): void {
    this.patienteService.findAll().subscribe(resposta => {
      this.patientes = resposta;
    })
  }

  findAllPsychologists(): void {
    this.psychologistService.findAll().subscribe(resposta => {
      this.psychologists = resposta;
    })
  }


}
