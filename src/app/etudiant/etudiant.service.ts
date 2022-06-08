import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private keycloakService: KeycloakService, private http: HttpClient) 
  { this.roles = this.keycloakService.getUserRoles();} 
  roles:any=[];
  name=new BehaviorSubject('abc');


  getStudentByemail(email:any): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(
      'http://localhost:8082/etudiant/getetudemail/'+ email
    );
  }
}
