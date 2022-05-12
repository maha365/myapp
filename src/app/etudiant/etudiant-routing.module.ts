import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant.component';

const routes: Routes = [{
  path:'',component: EtudiantComponent,
  children:
  [{
    path:'',
    redirectTo:'dashetud',
    pathMatch:'full'
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
