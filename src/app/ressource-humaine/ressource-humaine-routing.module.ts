import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEtudComponent } from './crud-etud/ajout-etud/ajout-etud.component';
import { CrudEtudComponent } from './crud-etud/crud-etud.component';
import { UpdateEtudComponent } from './crud-etud/update-etud/update-etud.component';
import { AjoutFormateurComponent } from './crud-formateur/ajout-formateur/ajout-formateur.component';
import { CrudFormateurComponent } from './crud-formateur/crud-formateur.component';
import { UpdateFormateurComponent } from './crud-formateur/update-formateur/update-formateur.component';
import { DashboardRHComponent } from './dashboard-rh/dashboard-rh.component';
import { AjouformationComponent } from './formation/ajouformation/ajouformation.component';
import { FormationComponent } from './formation/formation.component';
import { UpdateFromationComponent } from './formation/update-fromation/update-fromation.component';
import { RessourceHumaineComponent } from './ressource-humaine.component';

const routes: Routes = [ {
  path: '',
  component: RessourceHumaineComponent,
  children: 
  [{
      path: '',
      redirectTo: 'dashrh',
      pathMatch: 'full',
    } ,
    /*********etudiants***********/
    { path:'etud', component: CrudEtudComponent },

    {
      path:'addetud',
      component: AjoutEtudComponent,
    }, {
      path:'updateetudiants/:id',
      component: UpdateEtudComponent,
    },
/************Formation**************/
{ path:'listeFormation', component:FormationComponent },
{
  path:'addFormation',
  component: AjouformationComponent,
}, {
  path:'updateFormation/:id',
  component: UpdateFromationComponent,
},

/****Formateurs****/
{ path:'listeFormateur', component:CrudFormateurComponent},
{
  path:'addFormateur',
  component: AjoutFormateurComponent,
}, {
  path:'updateFormateur/:id',
  component: UpdateFormateurComponent,
},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourceHumaineRoutingModule { }
