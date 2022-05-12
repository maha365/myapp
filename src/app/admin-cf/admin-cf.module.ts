import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCfRoutingModule } from './admin-cf-routing.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
//import { CrudEtudComponent } from './crud-etud/crud-etud.component';
//import { AjoutEtudComponent } from './crud-etud/ajout-etud/ajout-etud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmincfService } from './admincf.service';
import { HttpClientModule } from '@angular/common/http';
//import { UpdateEtudComponent } from './crud-etud/update-etud/update-etud.component';
import { CrudRHComponent } from './crud-rh/crud-rh.component';
import { AjoutRhComponent } from './crud-rh/ajout-rh/ajout-rh.component';
import { UpdateRhComponent } from './crud-rh/update-rh/update-rh.component';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    //CrudEtudComponent,
    //AjoutEtudComponent,
    //UpdateEtudComponent,
    CrudRHComponent,
    AjoutRhComponent,
    UpdateRhComponent,
  ],
  imports: [
 CommonModule, 
    AdminCfRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers:[AdmincfService]
})
export class AdminCfModule { }