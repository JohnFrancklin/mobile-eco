import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as dialogs from "tns-core-modules/ui/dialogs";


@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tab = []
  constructor(private page: Page) { }

  creer(monPrenom, monAge) {

    let personne = {
      prenom: monPrenom,
      age: monAge
    };
    /*Pusher à la fin*/
    this.tab.push(personne)
    
    /*Pusher au debut*/
    //this.tab.unshift(personne)

    /*Verifier si in element existe dejà*/
    /*if (this.tab.indexOf(personne)! == 2) {
      alert("La valeur existe!")
    } else {
      alert(" La valeur n'existe pas!")
    }*/
  }

  supprimer(i) {
    //this.tab.splice(i,1);
    dialogs.confirm("voulez vous supprimer").then(isSure => {
      console.log("le resultat si true ou false" + isSure);
      if (isSure == true) {
        this.tab.splice(i, 1)
      } else {

      }
    });
  }

/*Supprimer tous les elements*/
 suppr(i){
  dialogs.confirm("voulez vous vraiment supprimer tout").then(isSure => {
    console.log("le resultat si true ou false" + isSure);
    if (isSure == true) {
      this.tab.splice(i)
    } else {

    }
  });
 }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
