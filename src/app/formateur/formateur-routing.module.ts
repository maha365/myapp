import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateurComponent } from './formateur.component';

const routes: Routes = [{
  path:'',component: FormateurComponent,
  children:
  [{
    path:'',
    redirectTo:'dashformateur',
    pathMatch:'full'
  },
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
