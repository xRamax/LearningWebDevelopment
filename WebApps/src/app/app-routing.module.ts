// Módulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


// Componentes
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full'}, 
  {path:'calculadora', component: CalculadoraComponent },
  {path:'tasklist', component: TaskListComponent},
  { path:'**', component: CalculadoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

