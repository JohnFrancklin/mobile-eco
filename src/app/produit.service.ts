import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  produit = [
    {
      id: 1,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    },
    {
      id: 2,
      text: "Telephone haute de gamme",
      number: 5,
      price: "1500 ar",
    },
    {
      id: 3,
      text: "Samsung galaxy tab 2",
      number: 4,
      price: "5400 ar",
    },
    {
      id: 4,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    },
    {
      id: 5,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    },
    {
      id: 6,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    }
  ]

  constructor() { }
  getProduit(){
    return this.produit;
  }
  
}
