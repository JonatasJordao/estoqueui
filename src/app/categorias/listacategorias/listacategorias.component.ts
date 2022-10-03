import { CategoriasService } from './../categorias.service';
import { Categoria } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  categorias: Categoria[] = [];

  displayedColumns = ['id', 'nomecategoria'];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categorias = this.categoriasService.list();
  }

}
