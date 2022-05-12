import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCfComponent } from './admin-cf.component';

import { AjoutRhComponent } from './crud-rh/ajout-rh/ajout-rh.component';
import { CrudRHComponent } from './crud-rh/crud-rh.component';
import { UpdateRhComponent } from './crud-rh/update-rh/update-rh.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminCfComponent,
    children: [
   {
        path: '',
        redirectTo: 'dash',
        pathMatch: 'full',
      } ,
      {
        path:'ajoutrh',
        component: AjoutRhComponent,
      },{
        path:'rh',
        component: CrudRHComponent,
      },
      {path:'updateRH/:id',
      component: UpdateRhComponent,
    },

      { path: 'admindash', component: DashboardAdminComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCfRoutingModule {}
