import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { FormateurRoutingModule } from './formateur-routing.module';
import { FormateurComponent } from './formateur.component';
import {CalendarModule} from 'primeng/calendar';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {AccordionModule} from 'primeng/accordion';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AjoutSeanceComponent } from './ajout-seance/ajout-seance.component';
import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    FormateurComponent,
    AjoutSeanceComponent
  ],
  imports: [
    //CommonModule,
    FormateurRoutingModule, MenubarModule, TabMenuModule,
    AccordionModule,MatToolbarModule,MatSidenavModule,MatIconModule,
    MatListModule,MatButtonModule,MatMenuModule,CalendarModule,FormsModule,HttpClientModule,FileUploadModule,FormsModule
  ]
})
export class FormateurModule { }
