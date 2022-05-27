import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { DashboardEtudiantComponent } from './dashboard-etudiant/dashboard-etudiant.component';
import { MatButtonModule } from '@angular/material/button';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {AccordionModule} from 'primeng/accordion';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    EtudiantComponent,
    DashboardEtudiantComponent,
    ProfileComponent,
  ],
  imports: [
    //CommonModule,
    EtudiantRoutingModule, MenubarModule, TabMenuModule,
    AccordionModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatButtonModule,MatMenuModule,
  ],

})
export class EtudiantModule { }
