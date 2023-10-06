import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Psychologist } from 'src/app/models/psychologist';
import { PsychologistService } from 'src/app/services/psychologist.service';

@Component({
  selector: 'app-psychologist-delete',
  templateUrl: './psychologist-delete.component.html',
  styleUrls: ['./psychologist-delete.component.css']
})
export class PsychologistDeleteComponent implements OnInit {

  psychologist: Psychologist = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

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

  delete(): void {
    this.service.delete(this.psychologist.id).subscribe(() => {
      this.router.navigate(['psychologists'])
    }, err => {
      console.log(err)
    })
  }

}
