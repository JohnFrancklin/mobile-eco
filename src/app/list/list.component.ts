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
    if (this.tab.indexOf(personne) !== -1) {
      alert("La valeur existe")
    } else {
      alert("La valeur n'existe pas")
      this.tab.push(personne)
    }
   

    /*Pusher au debut*/
    //this.tab.unshift(personne)
  }

  supprimer(i) {
    //this.tab.splice(i,1);
    dialogs.confirm({
      message: "Voulez vous vraiment supprimer",
      cancelButtonText: "annuler",
      okButtonText: "Supprimer"
    }).then(isSure => {
      console.log("le resultat si true ou false" + isSure);
      if (isSure == true) {
        this.tab.splice(i, 1)
      } else {

      }
    });
  }

  /*Supprimer tous les elements*/
  suppr(i) {
    dialogs.confirm({
      message: "Voulez vous vraiment supprimer tout",
      cancelButtonText: "annuler",
      okButtonText: "Supprimer"
    }).then(isSure => {
      console.log("le resultat si true ou false" + isSure);
      if (isSure == true) {
        this.tab.splice(i)
      } else {

      }
    });
    //this.tab = []; 
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
