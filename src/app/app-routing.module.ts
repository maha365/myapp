import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCfModule } from './admin-cf/admin-cf.module';
import { EmailComponent } from './email/email.component';
import { EtudiantModule } from './etudiant/etudiant.module';
import { FormateurModule } from './formateur/formateur.module';
//import { ImComponent } from './im/im.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { RessourceHumaineModule } from './ressource-humaine/ressource-humaine.module';
//import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
 /** {path:'login',component:LoginFormComponent},
  {path:'analy',component:AnalyticsComponent},
  {path:'dashboard',component:SideBarComponent},
  {path:'ajoutetud',component:AjoutEtudComponent},**/
  //{path:'im',component:ImComponent}, 
  {path:'dash',loadChildren:()=>import('./admin-cf/admin-cf.module').then(m=>AdminCfModule)},
  {path:'',redirectTo:'dash',pathMatch:'full'},
  {path:'dashetud',loadChildren:()=>import('./etudiant/etudiant.module').then(m=>EtudiantModule)},
  {path:'',redirectTo:'dashetud',pathMatch:'full'},
  {path:'dashrh',loadChildren:()=>import('./ressource-humaine/ressource-humaine.module').then(m=>RessourceHumaineModule)},
  {path:'',redirectTo:'dashformateur',pathMatch:'full'}, {path:'dashformateur',loadChildren:()=>import('./formateur/formateur.module').then(m=>FormateurModule)},
  {path:'',redirectTo:'dashformateur',pathMatch:'full'},
  {path:'Email',component:EmailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
