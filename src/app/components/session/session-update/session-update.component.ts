import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Session} from "../../../models/session";
import {Psychologist} from "../../../models/psychologist";
import {Patiente} from "../../../models/patiente";
import {SessionService} from "../../../services/session.service";
import {PatienteService} from "../../../services/patiente.service";
import {PsychologistService} from "../../../services/psychologist.service";

@Component({
  selector: 'app-session-update',
  templateUrl: './session-update.component.html',
  styleUrls: ['./session-update.component.css']
})
export class SessionUpdateComponent implements OnInit {

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
    this.session.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllPatientes();
    this.findAllPsychologists();
  }

  findById(): void {
    this.sessionService.findById(this.session.id).subscribe(resposta => {
      this.session = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  update(): void {
    this.sessionService.update(this.session).subscribe(resposta => {
      this.toastService.success('Session atualizado com sucesso', 'Atualizar session');
      this.router.navigate(['sessions']);
    }, ex => {
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

  retornaStatus(status: any): string {
    if(status == '0') {
      return 'ABERTO'
    } else if(status == '1') {
      return 'EM ANDAMENTO'
    } else {
      return 'ENCERRADO'
    }
  }

  retornaPrioridade(prioridade: any): string {
    if(prioridade == '0') {
      return 'BAIXA'
    } else if(prioridade == '1') {
      return 'MÉDIA'
    } else {
      return 'ALTA'
    }
  }

}
