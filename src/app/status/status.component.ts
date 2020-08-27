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
    this.tab.push(couleur);
    //this.tab.unshift(couleur);
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

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}






