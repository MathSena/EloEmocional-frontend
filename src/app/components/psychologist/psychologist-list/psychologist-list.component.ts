import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Psychologist} from "../../../models/psychologist";
import {PsychologistService} from "../../../services/psychologist.service";

@Component({
  selector: 'app-psychologist-list',
  templateUrl: './psychologist-list.component.html',
  styleUrls: ['./psychologist-list.component.css']
})
export class PsychologistListComponent implements OnInit {

  ELEMENT_DATA: Psychologist[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Psychologist>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
      private service: PsychologistService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Psychologist>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
