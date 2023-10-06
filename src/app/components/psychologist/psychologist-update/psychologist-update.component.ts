import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Psychologist } from 'src/app/models/psychologist';
import { PsychologistService } from 'src/app/services/psychologist.service';


@Component({
  selector: 'app-psychologist-update',
  templateUrl: './psychologist-update.component.html',
  styleUrls: ['./psychologist-update.component.css']
})
export class PsychologistUpdateComponent implements OnInit {

  psychologist: Psychologist = {
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
      private service: PsychologistService,
      private router:          Router,
      private route:   ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.psychologist.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.psychologist.id).subscribe(resposta => {
      resposta.perfis = []
      this.psychologist = resposta;
    })
  }

  update(): void {
    this.service.update(this.psychologist).subscribe(() => {
      this.router.navigate(['psychologists'])
    }, ex => {
     console.log(ex)
    })
  }

  addPerfil(perfil: any): void {
    if(this.psychologist.perfis.includes(perfil)) {
      this.psychologist.perfis.splice(this.psychologist.perfis.indexOf(perfil), 1);
    } else {
      this.psychologist.perfis.push(perfil);
    }

  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
        && this.email.valid && this.senha.valid
  }
}
