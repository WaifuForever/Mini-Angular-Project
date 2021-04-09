import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produtos.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  produtos: Array<Produto>;

  constructor(private  service: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.service.listarProdutos();
  }

}
