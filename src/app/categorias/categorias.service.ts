import { Categoria } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }


  list(): Categoria[] {
    return [
      {id: 1, nomecategoria: 'carne'},
      {id: 2, nomecategoria: 'verdura'}

    ];
  }
}
