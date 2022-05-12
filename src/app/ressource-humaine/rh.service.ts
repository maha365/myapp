import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';
import { Formateur } from '../Models/Formateurs';
import { Formation } from '../Models/Formation';

@Injectable({
  providedIn: 'root'
})
export class RhService {

  private url: String = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
  constructor(private http: HttpClient) {}

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
      'http://localhost:8080/etudiant/addEtud',
      body,
      { headers: headrs }
    );
  }
  UpdateEtud(et: Etudiant): Observable<Etudiant> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(et);
    console.log('Service:', body);
    return this.http.put<Etudiant>('http://localhost:8080/etudiant/update', body, {
      headers: headrs,
    });
  }

  getEtudiantByID(id: any) {
    return this.http.get<Etudiant[]>(
      'http://localhost:8080/etudiant/getEtudById/' + id
    );
  }
  /******************************Formation************/
  
  CreateFormation(formation:Formation): Observable<Formation> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formation);
    console.log('Service:', body);

    return this.http.post<Formation>(
      'http://localhost:8080/formation/addFormation',
      body,
      { headers: headrs }
    );
  }
  UpdateFromation(formation: Formation): Observable<Formation> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formation);
    console.log('Service:', body);
    return this.http.put<Formation>('http://localhost:8080/formation/update', body, {
      headers: headrs,
    });
  }

  getFormationByID(id: any) {
    return this.http.get<Formation[]>(
      'http://localhost:8080/formation/getFormationById/'+ id
    );
  }
  getAllFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>('http://localhost:8080/formation/getallFormation');
  } 
  /*********Formateur********/




  CreateFormateur(formateur:Formateur): Observable<Formateur> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formateur);
    console.log('Service:', body);

    return this.http.post<Formateur>(
      'http://localhost:8080/formateur/addFormateur',
      body,
      { headers: headrs }
    );
  }
  UpdateFromateur(formateur: Formateur): Observable<Formateur> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(formateur);
    console.log('Service:', body);
    return this.http.put<Formateur>('http://localhost:8080/formateur/update', body, {
      headers: headrs,
    });
  }

  getFormateurByID(id: any) {
    return this.http.get<Formateur[]>(
      'http://localhost:8080/formateur/getFormateurById/'+ id
    );
  }
  getAllFormateur(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>('http://localhost:8080/formateur/getallFormateur');
  } 
  
}
