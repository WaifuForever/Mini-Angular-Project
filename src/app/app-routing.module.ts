import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ListarComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produtos/detalhe/:id',
    component: DetalheComponent,
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'produtos/novo',
    component: AdicionarComponent,
    data: { title: 'Novo do Produto' }
  },
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
