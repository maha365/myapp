import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CentreFormation } from '../Models/CentreFormation';

@Injectable({
  providedIn: 'root'
})
export class SupadminService {

  private url: String = 'http://localhost:8082';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };

  constructor(private keycloakService: KeycloakService, private http: HttpClient) { this.roles = this.keycloakService.getUserRoles(); }
  roles: any = [];
  name = new BehaviorSubject('abc');

  CreateCentre(et: CentreFormation): Observable<CentreFormation> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(et);
    console.log('Service:', body);

    return this.http.post<CentreFormation>(
      'http://localhost:8082/admincf/addadmincf',
      body,
      { headers: headrs }
    );
  }


  getAllCentre(): Observable<CentreFormation[]> {
    return this.http.get<CentreFormation[]>(this.url + '/admincf/getallAdmincf');
  }

  
  getcentreByID(id: any) {
    return this.http.get<CentreFormation[]>(
      'http://localhost:8082/admincf/getAdmincfById/' + id
    );
  }

  UpdateCentre(formation: CentreFormation): Observable<CentreFormation> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formation);
    console.log('Service:', body);
    return this.http.put<CentreFormation>('http://localhost:8082/admincf/update', body, {
      headers: headrs,
    });
  }


}
