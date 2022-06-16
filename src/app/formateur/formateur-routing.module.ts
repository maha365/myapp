import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutSeanceComponent } from './ajout-seance/ajout-seance.component';
import { FormateurComponent } from './formateur.component';

const routes: Routes = [{
  path: '', component: FormateurComponent,
  children:
    [{
      path: '',
      redirectTo: 'AjoutSeance',
      pathMatch: 'full'
    },
    {
      path: 'AjoutSeance',component: AjoutSeanceComponent
    },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
