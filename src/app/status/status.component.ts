import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  tab = [];

  constructor(private page: Page, ) { }

  creer(couleur) {
    /*Pusher un element a la fin d'un tableau */
    //this.tab.push(couleur);

    /*Pusher un element au debut d'un tableau*/
    //this.tab.unshift(couleur);

    /*Connaitre la longueur d'un tableau*/
    //alert(this.tab.length);

    if (this.tab.indexOf(couleur) !== -1) {
      alert("la valeur existe")
    } else {
      alert("la valeur n'existe pas");
      this.tab.push(couleur);
    }
  }

  supprimer(i) {
    //this.tab.splice(i,1);
    dialogs.confirm({
      title: "Voulez vous supprimer",
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

  suppr(i) {
    dialogs.confirm({
      title: "Voulez vous vraiment supprimer tout",
      cancelButtonText: "annuler",
      okButtonText: "Supprimer"
    }).then(isSure => {
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






