import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

// "..." operador do Typescript que permite concatenar arrays

export const routes: Routes = [
	{ 
	 	path: '', 
	 	redirectTo: '/tarefas/listar', 
	 	pathMatch: 'full' 
	},
	...TarefaRoutes
];

@NgModule({
  // forRoot = inicializa as rotas
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
