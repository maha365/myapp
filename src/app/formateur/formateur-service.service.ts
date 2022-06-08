import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  constructor(private keycloakService: KeycloakService) 
  { this.roles = this.keycloakService.getUserRoles();} 
  roles:any=[];
  name=new BehaviorSubject('abc');

}
