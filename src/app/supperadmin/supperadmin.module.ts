import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupperadminRoutingModule } from './supperadmin-routing.module';
import { SupperadminComponent } from './supperadmin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccordionModule } from 'primeng/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AjoutcnfrComponent } from './ajoutcnfr/ajoutcnfr.component';
import { FormsModule } from '@angular/forms';
import { ListcentreComponent } from './listcentre/listcentre.component';
import { UpdatecfComponent } from './updatecf/updatecf.component';


@NgModule({
  declarations: [
    SupperadminComponent,
    AjoutcnfrComponent,
    ListcentreComponent,
    UpdatecfComponent
  ],
  imports: [
    CommonModule,
    SupperadminRoutingModule, MenubarModule, TabMenuModule,
    AccordionModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatButtonModule,MatMenuModule,FormsModule
  ]
})
export class SupperadminModule { }
