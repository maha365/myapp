import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Formateur } from '../Models/Formateurs';
import { Formation } from '../Models/Formation';
import { Seance } from '../Models/Seance';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {
  private url: String = 'http://localhost:8082';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };


  constructor(private keycloakService: KeycloakService, private http: HttpClient) {
     this.roles = this.keycloakService.getUserRoles(); 
    }
  roles: any = [];
  name = new BehaviorSubject('abc');

  CreateCentre(et: Seance): Observable<Seance> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(et);
    console.log('Service:', body);

    return this.http.post<Seance>(
      'http://localhost:8082/Seance/addSeance',
      body,
      { headers: headrs }
    );
  }
  getFormateurByemail(email:any): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(
      'http://localhost:8082/formateur/getform/'+ email
    );
  }

  FormationByFormateur(formateur: Formateur): Observable<Formateur> {
 

    return this.http.post<Formateur>('http://localhost:8082/formation/getformationbyformateur', formateur);
  }

}
