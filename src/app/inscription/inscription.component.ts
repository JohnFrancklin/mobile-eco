import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { InscriptionService } from '../service/inscription.service';

@Component({
  selector: 'ns-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private page: Page,private inscriptionService: InscriptionService) { }
  
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  createUser(){
    let id = "";
    let personne = {
      nom: "",
      prenom: "",
      username:"",
      password:"",
      email:"",
      adresse:"",
      telephone:""
    }
  
    this.inscriptionService.createUser(id,personne).subscribe(result => {
      console.log("s'inscrire", result);
    })
  }

}
