import { Categoria } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  categorias: Categoria[] = [
    {id: 1, nomecategoria: 'Carne'},

  ];

  displayedColumns = ['id', 'nomecategoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
