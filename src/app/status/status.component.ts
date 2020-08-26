import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  tab = [];
  
  constructor(private page: Page, ) { }

  creer(couleur){
   this.tab.push(couleur);
  }
  supprimer(i){
    this.tab.splice(i,1);
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}






