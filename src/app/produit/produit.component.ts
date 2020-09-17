import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'ns-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit {
  @ViewChild("icon", { read: ElementRef, static:false }) view: ElementRef;
  produit: any;

  constructor(private page: Page,
              private produitService: ProduitService,) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.getProduit();
  }

  getProduit() {
    this.produit = this.produitService.getProduit();
    //console.log(this.produit)
  }
}
