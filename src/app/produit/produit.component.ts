import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit {
  @ViewChild("icon", { read: ElementRef, static: false }) view: ElementRef;
 
  tab = [
    {
      id: 1,
      text: "MacBook air mi 2020",
      number: 4,
      grade: true,
      price: "1000 ar",
      grade2 : false,
      favorite: false,
      grocery: false
    },
    {
      id: 2,
      text: "MacBook air mi 2020",
      number: 4,
      grade: true,
      price: "1000 ar",
      grade2 : false,
      favorite: false,
      grocery: false
    },
    {
      id: 3,
      text: "MacBook air mi 2020",
      number: 4,
      grade: true,
      price: "1000 ar",
      grade2 : false,
      favorite: false,
      grocery: false
    },
    {
      id: 4,
      text: "MacBook air mi 2020",
      number: 4,
      grade: true,
      price: "1000 ar",
      grade2 : false,
      favorite: false,
      grocery: false
    },
    {
      id: 5,
      text: "MacBook air mi 2020",
      number: 4,
      grade: true,
      price: "1000 ar",
      grade2 : false,
      favorite: false,
      grocery: false
    },
    {
      id: 6,
      text: "MacBook air mi 2020",
      number: 4,
      grade: true,
      price: "1000 ar",
      grade2 : false,
      favorite: false,
      grocery: false
    }
  ]

  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
  
  addOrRemovefavorite(id, i) {
    
    if (this.tab[i].favorite == true) {
      this.tab[i].favorite = false;
    } else {
      this.tab[i].favorite= true;
    }
  }
  addOrRemovegrade(id, i) {
    
    if (this.tab[i].grade == true) {
      this.tab[i].grade = false;
    } else {
      this.tab[i].grade= true;
    }
  }
  addOrRemovegrocery(id, i) {
    
    if (this.tab[i].grocery == true) {
      this.tab[i].grocery = false;
    } else {
      this.tab[i].grocery= true;
    }
  }

  animate() {
    this.view.nativeElement.animate({
      backgroundColor: "#3D5AFE",
      duration: 500,
      curve: "easeIn"
    });

  }

}
