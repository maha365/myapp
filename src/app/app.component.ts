import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AdmincfService } from './admin-cf/admincf.service';
import { EtudiantService } from './etudiant/etudiant.service';
import { FormateurServiceService } from './formateur/formateur-service.service';
import { RhService } from './ressource-humaine/rh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
    user: any;

    constructor(private rhs:RhService,private etuds:EtudiantService,private AdminSer:AdmincfService,private formateurSer:FormateurServiceService,
      private keycloakService: KeycloakService,
      private router:Router){
       this.user = this.keycloakService.getUsername()
       this.rhs.name.next(this.user)
        if(this.rhs.roles.includes('ressourceHum')) {
          this.router.navigate(['dashrh'])
    
        }
        else if(this.AdminSer.roles.includes('app-admin')) {
          this.router.navigate(['dash'])
        }
        else if(this.etuds.roles.includes('etud')) {
          this.router.navigate(['dashetud'])
        } else if(this.formateurSer.roles.includes('formateur')) {
          this.router.navigate(['dashformateur'])
        } 
    }
   
}
