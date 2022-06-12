import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutcnfrComponent } from './ajoutcnfr/ajoutcnfr.component';
import { ListcentreComponent } from './listcentre/listcentre.component';
import { SupperadminComponent } from './supperadmin.component';
import { UpdatecfComponent } from './updatecf/updatecf.component';

const routes: Routes = [{
  path: '', component: SupperadminComponent,
  children:
    [{
      path: '',
      redirectTo: 'ListeCentre',
      pathMatch: 'full'
    },
    { path: 'AjoutCentre', component: AjoutcnfrComponent },
    { path: 'ListeCentre', component: ListcentreComponent },
    { path: 'UpdateCentre/:id', component: UpdatecfComponent }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupperadminRoutingModule { }
