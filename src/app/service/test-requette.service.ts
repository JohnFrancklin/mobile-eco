import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const endPoint = "http://192.168.137.1:3000/produits";

@Injectable({
  providedIn: 'root'
})
export class TestRequetteService {

  constructor(private http: HttpClient) { }
  
  getAllProduits(page){
    return this.http.get<any[]>(endPoint+"/getProduitsCustomised/"+page,httpOptions);
  }

  launchProduct(id, lanceur) {
    return this.http.put<any[]>(endPoint+"/update/lancement/"+id, lanceur, httpOptions);
  }





  postItem(data){
      return this.http.post<any>(endPoint,data);
  }


  
}
