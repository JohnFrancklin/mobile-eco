import { Component, OnInit } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
