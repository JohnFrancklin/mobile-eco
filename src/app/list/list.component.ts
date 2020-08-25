import { Component, OnInit } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';

const array = [
  {
    nom: "Rakoto",
    prenom:"Joseph",
    age:50
  },
  {
    nom: "Rabe",
    prenom:"Marc",
    age:45
  },
  ]
console.log(array)

@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private page: Page) { }

entrez(nom,prenom){
  alert("nom" +nom + "prenom" +prenom);
}
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
