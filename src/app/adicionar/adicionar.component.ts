import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produtos.service'
import { Produto } from '../models/produto'

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  productForm: FormGroup;
  p1: Produto = null;

  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'desc': [null, Validators.required],
      'preco': [null, Validators.required]
    });
  }

  addProduto(form: FormGroup){

    this.productForm.controls['nome'].value
    
    console.log(form.value);
    console.log(this.productForm.controls['nome'].value)    
    console.log(form.valid)
    this.p1 = new Produto(
      6,
      this.productForm.controls['nome'].value,
      this.productForm.controls['preco'].value,
      this.productForm.controls['desc'].value,
      new Date()
    ) 
    this.produtoService.cadastrarProduto(this.p1)

  }
}
