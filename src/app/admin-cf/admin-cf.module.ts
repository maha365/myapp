import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCfRoutingModule } from './admin-cf-routing.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmincfService } from './admincf.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudRHComponent } from './crud-rh/crud-rh.component';
import { AjoutRhComponent } from './crud-rh/ajout-rh/ajout-rh.component';
import { UpdateRhComponent } from './crud-rh/update-rh/update-rh.component';
import {ChartModule} from 'primeng/chart';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    DashboardAdminComponent,
    CrudRHComponent,
    AjoutRhComponent,
    UpdateRhComponent,
  ],
  imports: [
 CommonModule, 
    AdminCfRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule,ChartModule,AccordionModule, 
  ],
  providers:[AdmincfService]
})
export class AdminCfModule { }
