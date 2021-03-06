import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CentreFormation } from '../Models/CentreFormation';
import { Etudiant } from '../Models/Etudiant';
import { RH } from '../Models/RH';

@Injectable({
  providedIn: 'root',
})
export class AdmincfService {
  private url: String = 'http://localhost:8082';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
  constructor(private http: HttpClient,private keycloakService: KeycloakService) {this.roles = this.keycloakService.getUserRoles();}

  
  /******************RH*****************/  
  getAllRh(): Observable<RH[]> {
    return this.http.get<RH[]>(this.url + '/rh/getallRh');
  } 
  
  CreateRH(rh: RH): Observable<RH> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(rh);
    console.log('Service:', body);

    return this.http.post<RH>(
      'http://localhost:8082/rh/addRh',
      body,
      { headers: headrs }
    );
  }
  UpdateRH(rh: RH): Observable<RH> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(rh);
    console.log('Service:', body);
    return this.http.put<RH>('http://localhost:8082/rh/update', body, {
      headers: headrs,
    });
  }

  getRHByID(id: any) {
    return this.http.get<RH[]>(
      'http://localhost:8082/rh/getRhById/' + id
    );
  }
  /******************************************...image */
  roles:any=[];
  name=new BehaviorSubject('abc');
  getACFByemail(email:any): Observable<CentreFormation[]>{
    return this.http.get<CentreFormation[]>(
      'http://localhost:8082/admincf/getAdmi/'+ email
    );
  }

}
