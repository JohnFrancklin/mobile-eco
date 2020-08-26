import { Component, OnInit } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
tab=[]
  constructor(private page: Page) { }

creer(monPrenom,monAge){
  let personne={
    prenom : monPrenom,
    age : monAge
  };
 // alert(personne);
  this.tab.push(personne)
}
supprimer(i){
  this.tab.splice(i,1);
}
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
