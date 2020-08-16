import { Component, OnInit, ViewChild, ElementRef, ɵisListLikeIterable } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';


// import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@Component({
  selector: 'ns-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild("icon", { read: ElementRef, static: false }) view: ElementRef;

  tab = [
    {
      id: 1,
      title: "Cahier",
      favorite: false
    },
    {
      id: 2,
      title: "Stylo",
      favorite: false
    },
    {
      id: 3,
      title: "Regle",
      favorite: false
    },
    {
      id: 4,
      title: "Crayon",
      favorite: true
    },
    {
      id: 5,
      title: "Gomme",
      favorite: false
    }
  ]


  constructor(private page: Page) { 
    // this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
  }

  addOrRemoveFavorite(id, i) {

    if (this.tab[i].favorite == true) {
      this.tab[i].favorite = false;

    } else {
      this.tab[i].favorite = true;
    }

    // this.view.nativeElement.style.color = "pink";



  }


  animate() {
    this.view.nativeElement.animate({
      backgroundColor: "#3D5AFE",
      duration: 500,
      curve: "easeIn"
    });

  }



  getElemBg(args) { 
    const view = require("tns-core-modules/ui/core/view"); 
    // let button = args.object; 
    // let parent = button.parent; 
    let fstr = view.getViewById("rakoto"); 
    fstr.backgroundColor = "green"; 
  }


}
