import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';
import { RH } from '../Models/RH';

@Injectable({
  providedIn: 'root',
})
export class AdmincfService {
  private url: String = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
  constructor(private http: HttpClient) {}

  
  /******************RH*****************/  
  getAllRh(): Observable<RH[]> {
    return this.http.get<RH[]>(this.url + '/rh/getallRh');
  } 
  
  CreateRH(rh: RH): Observable<RH> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(rh);
    console.log('Service:', body);

    return this.http.post<RH>(
      'http://localhost:8080/rh/addRh',
      body,
      { headers: headrs }
    );
  }
  UpdateRH(rh: RH): Observable<RH> {
    const headrs = { 'Content-Type': 'application/Json' };
    const body = JSON.stringify(rh);
    console.log('Service:', body);
    return this.http.put<RH>('http://localhost:8080/rh/update', body, {
      headers: headrs,
    });
  }

  getRHByID(id: any) {
    return this.http.get<RH[]>(
      'http://localhost:8080/rh/getRhById/' + id
    );
  }
  /******************************************...image */

}
