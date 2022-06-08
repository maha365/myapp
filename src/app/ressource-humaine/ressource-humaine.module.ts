import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RessourceHumaineRoutingModule } from './ressource-humaine-routing.module';
import { DashboardRHComponent } from './dashboard-rh/dashboard-rh.component';
import { CrudEtudComponent } from './crud-etud/crud-etud.component';
import { AjoutEtudComponent } from './crud-etud/ajout-etud/ajout-etud.component';
import { UpdateEtudComponent } from './crud-etud/update-etud/update-etud.component';
import { RhService } from './rh.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './formation/formation.component';
import { AjouformationComponent } from './formation/ajouformation/ajouformation.component';
import { UpdateFromationComponent } from './formation/update-fromation/update-fromation.component';
import { CrudFormateurComponent } from './crud-formateur/crud-formateur.component';
import { AjoutFormateurComponent } from './crud-formateur/ajout-formateur/ajout-formateur.component';
import { UpdateFormateurComponent } from './crud-formateur/update-formateur/update-formateur.component';
import { ProfileRhComponent } from './profile-rh/profile-rh.component';
import { EmailrhComponent } from './emailrh/emailrh.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    DashboardRHComponent,
    CrudEtudComponent,
    AjoutEtudComponent,
    UpdateEtudComponent,
    FormationComponent,
    AjouformationComponent,
    UpdateFromationComponent,
    CrudFormateurComponent,
    AjoutFormateurComponent,
    UpdateFormateurComponent,
    ProfileRhComponent,
    EmailrhComponent,
  ],
  imports: [
    CommonModule,
    RessourceHumaineRoutingModule, MenubarModule, TabMenuModule,
     AccordionModule, MatToolbarModule, MatSidenavModule, MatIconModule,
      MatListModule, MatButtonModule, MatMenuModule, FormsModule,
       ReactiveFormsModule, HttpClientModule, DropdownModule
  ],
  providers: [RhService],  schemas: [ NO_ERRORS_SCHEMA
  ]


})
export class RessourceHumaineModule { }
