import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patiente } from 'src/app/models/patiente';
import { PatienteService } from 'src/app/services/patiente.service';

@Component({
  selector: 'app-patiente-create',
  templateUrl: './patiente-create.component.html',
  styleUrls: ['./patiente-create.component.css']
})
export class PatienteCreateComponent implements OnInit {

  patiente: Patiente = {
    id:         '',
    name:       '',
    cpf:        '',
    email:      '',
    password:      '',
    profiles:     [],
    dateCreation: ''
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  cpf: FormControl =       new FormControl(null, Validators.required);
  email: FormControl =        new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
      private service: PatienteService,
      private router:          Router,
  ) { }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.patiente).subscribe(() => {
      this.router.navigate(['patientes'])
    }, ex => {
      if(ex.error.errors) {
        console.log(ex.error.errors)
      }

    })
  }

  addPerfil(perfil: any): void {
    if(this.patiente.profiles.includes(perfil)) {
      this.patiente.profiles.splice(this.patiente.profiles.indexOf(perfil), 1);
    } else {
      this.patiente.profiles.push(perfil);
    }

  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
        && this.email.valid && this.senha.valid
  }
}
