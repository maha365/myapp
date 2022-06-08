import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';
import { Formateur } from '../Models/Formateurs';
import { Formation } from '../Models/Formation';
import { RH } from '../Models/RH';

@Injectable({
  providedIn: 'root'
})
export class RhService {

  private url: String = 'http://localhost:8082';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
  constructor(private http: HttpClient ,private keycloakService: KeycloakService) 
  { this.roles = this.keycloakService.getUserRoles();}

  getAllEtudiant(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.url + '/etudiant/getallEtud');
  }

  /**deleteStudent(id:any):Observable<any>{
    return this.http.delete(this.url+"student/delete/"+id,{ responseType: 'text'});
  }**/

  CreateEtud(et: Etudiant): Observable<Etudiant> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(et);
    console.log('Service:', body);

    return this.http.post<Etudiant>(
      'http://localhost:8082/etudiant/addEtud',
      body,
      { headers: headrs }
    );
  }
  UpdateEtud(et: Etudiant): Observable<Etudiant> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(et);
    console.log('Service:', body);
    return this.http.put<Etudiant>('http://localhost:8082/etudiant/update', body, {
      headers: headrs,
    });
  }

  getEtudiantByID(id: any) {
    return this.http.get<Etudiant[]>(
      'http://localhost:8082/etudiant/getEtudById/' + id
    );
  }
  /******************************Formation************/
  
  CreateFormation(formation:Formation): Observable<Formation> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formation);
    console.log('Service:', body);

    return this.http.post<Formation>(
      'http://localhost:8082/formation/addFormation',
      body,
      { headers: headrs }
    );
  }
  UpdateFromation(formation: Formation): Observable<Formation> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formation);
    console.log('Service:', body);
    return this.http.put<Formation>('http://localhost:8082/formation/update', body, {
      headers: headrs,
    });
  }

  getFormationByID(id: any) {
    return this.http.get<Formation[]>(
      'http://localhost:8082/formation/getFormationById/'+ id
    );
  }
  getAllFormation(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/formation/getallFormation');
  } 
  /*********Formateur********/




  CreateFormateur(formateur:Formateur): Observable<Formateur> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formateur);
    console.log('Service:', body);

    return this.http.post<Formateur>(
      'http://localhost:8082/formateur/addFormateur',
      body,
      { headers: headrs }
    );
  }
  UpdateFromateur(formateur: Formateur): Observable<Formateur> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formateur);
    console.log('Service:', body);
    return this.http.put<Formateur>('http://localhost:8082/formateur/update', body, {
      headers: headrs,
    });
  }

  getFormateurByID(id: any) {
    return this.http.get<Formateur[]>(
      'http://localhost:8082/formateur/getFormateurById/'+ id
    );
  }
  getAllFormateur(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>('http://localhost:8082/formateur/getallFormateur');
  } 
  /*********roles keycloak */
  roles:any=[];
  name=new BehaviorSubject('abc');

  getRhByemail(email:any): Observable<RH[]>{
    return this.http.get<RH[]>(
      'http://localhost:8082/rh/getetudemail/'+ email
    );
  }



}