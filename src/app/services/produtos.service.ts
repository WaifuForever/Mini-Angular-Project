import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Array<Produto>;

  constructor() {
    this.produtos = new Array<Produto>();
    this.produtos.push(new Produto(1,'Notebook','Notebook dell, 14, 16GB RAM',5000.00, new Date()));
    this.produtos.push(new Produto(2,'Celular',' Moto G8',1000.00, new Date()));
    this.produtos.push(new Produto(3,'Caderno','15 materias, capa dura',15.00, new Date()));
    this.produtos.push(new Produto(4,'Livro','Livro CS. LEWIS',50.00, new Date()));
  }

  listarProdutos(): Array<Produto> {
    return this.produtos;
  }

  getProdutoPorId(id:number): Produto{
    return this.produtos.find(p => p.id === Number(id));
  }

  cadastrarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  editarProduto(id: number, produto: Produto): void {
    if (id) {
      const index = this.produtos.findIndex(p => p.id === Number(id));
      if (index > -1) {
        this.produtos[index] = produto;
      }
    }
  }

  excluir(id: number): void {
    if (id) {
      const index = this.produtos.findIndex(p => p.id === id);
      if (index > -1) {
        this.produtos.splice(index, 1);
      }
    }
  }

  gerarId(): number{
    return this.produtos.length + 1;
  }

}
