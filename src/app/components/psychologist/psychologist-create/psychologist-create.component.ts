import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Psychologist } from 'src/app/models/psychologist';  // Ajuste no import do modelo
import { PsychologistService } from 'src/app/services/psychologist.service';  // Ajuste no import do serviço

@Component({
  selector: 'app-psychologist-create',
  templateUrl: './psychologist-create.component.html',
  styleUrls: ['./psychologist-create.component.css']
})
export class PsychologistCreateComponent implements OnInit {

  psychologist: Psychologist = {  // Ajuste na declaração do objeto
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  cpf: FormControl =       new FormControl(null, Validators.required);
  email: FormControl =        new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
      private service: PsychologistService,  // Ajuste no tipo do serviço
      private router:          Router,
  ) { }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.psychologist).subscribe(() => {  // Ajuste na chamada do serviço
      this.router.navigate(['psychologists'])  // Ajuste na navegação
    }, ex => {
      console.log(ex)
    })
  }

  addPerfil(perfil: any): void {
    if(this.psychologist.perfis.includes(perfil)) {  // Ajuste na verificação de perfis
      this.psychologist.perfis.splice(this.psychologist.perfis.indexOf(perfil), 1);  // Ajuste na remoção de perfil
    } else {
      this.psychologist.perfis.push(perfil);  // Ajuste na adição de perfil
    }
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
        && this.email.valid && this.senha.valid
  }
}
