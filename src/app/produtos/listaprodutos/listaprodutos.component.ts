import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})
export class ListaprodutosComponent implements OnInit {

  produtos: Produto[] = [];

  displayedColumns = ['id', 'nomeproduto'];

  constructor(private produtosService: ProdutosService ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.list();
  }

}
