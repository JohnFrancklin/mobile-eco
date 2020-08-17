import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit {
  @ViewChild("icon", { read: ElementRef, static:false }) view: ElementRef;
 
  tab = [
    {
      id: 1,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    },
    {
      id: 2,
      text: "Telephone haute de gamme",
      number: 5,
      price: "1500 ar",
    },
    {
      id: 3,
      text: "Samsung galaxy tab 2",
      number: 4,
      price: "5400 ar",
    },
    {
      id: 4,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    },
    {
      id: 5,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    },
    {
      id: 6,
      text: "MacBook air mi 2020",
      number: 4,
      price: "1000 ar",
    }
  ]

  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}
