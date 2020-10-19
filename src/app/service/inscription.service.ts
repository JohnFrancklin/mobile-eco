import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const endPoint = "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {


  constructor(private http: HttpClient) {}

  createUser(id,inscription ) {
    return this.http.post<any[]>(endPoint+ id, inscription, httpOptions);
  }
}
