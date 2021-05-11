import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produtos.service'
import { Produto } from '../models/produto'

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  products: Produto[] = [];
  

  constructor( private activatedRoute: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id)
    this.products.push(this.produtoService.getProdutoPorId(parseInt(id)))
  }


}
