import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEtudiantComponent } from './dashboard-etudiant/dashboard-etudiant.component';
import { EtudiantComponent } from './etudiant.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '', component: EtudiantComponent,
  children:
    [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    { path: 'dashboard', component: DashboardEtudiantComponent },
    { path: 'profile', component: ProfileComponent }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
