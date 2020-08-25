import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {

  constructor(private page: Page, ) { }
  creer(prenom) {
    alert("prenom" + prenom);
  }

  supprimer() {
    const prenom = ["Lita", "Bema", "Luc", "Lucie", "Billy"];
    prenom.splice(1, 3)
    alert("prenom" + prenom)
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}

/*const prenom = ["Lita", "Bema", "Luc","Lucie"];
for(let i=0; i<prenom.length;i++)
console.log(prenom[i])*/






