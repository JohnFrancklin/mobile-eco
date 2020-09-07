import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  objet = [
    {
      nom: "Rakoto",
      age: "22 ans",
      address: "Mahamasina,en face du stade"
    },
    {
      nom: "Rabe",
      age: "12 ans",
      address: "Ambalapaiso,Lot 21542121"
    },
    {
      nom: "Haingo",
      age: "35 ans",
      address: "SAOFIA 121212"
    },
    {
      nom: "Liva",
      age: "57 ans",
      address: "Ampasambazaha 325"
    },
    {
      nom: "Vonjy",
      age: "36 ans",
      address: "Mahamasina,en face du stade"
    },
    {
      nom: "Vola",
      age: "24 ans",
      address: "Ankadilalana"
    },
  ]
  personne = {
    nom: '',
    age: '',
    address: ''
  }

  constructor(private page: Page) { }
  afficher(objet, i) {
    this.personne = objet[i]
  }
  modif(personne,i) {
    this.objet[i] = personne;
    console.log(i);
    
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}