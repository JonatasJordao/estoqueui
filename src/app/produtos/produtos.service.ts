import { Injectable } from '@angular/core';
import { Produto } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  list(): Produto[] {
    return[
      {id: 1, nomeproduto: 'carne moida'},
      {id: 2, nomeproduto: 'alface'}
    ];
  }
}
