import { Component, OnInit } from '@angular/core';
import { TestRequetteService } from '../service/test-requette.service';

@Component({
  selector: 'ns-requetteback',
  templateUrl: './requetteback.component.html',
  styleUrls: ['./requetteback.component.css']
})
export class RequettebackComponent implements OnInit {

  constructor(private testRequetteService: TestRequetteService) { }

  ngOnInit(): void {

  }


  getProduits(){
    let page = 1;
    this.testRequetteService.getAllProduits(page).subscribe(result => {
      console.log("les resultats", result);
    })
  }

  launchProduit(){
    let id = "5f59356e989b8f591cd88c8f";
    let body = {
      acteur: "john"
    }
    this.testRequetteService.launchProduct(id, body).subscribe(result => {
      console.log("les resultats", result);
    })
  }



}
