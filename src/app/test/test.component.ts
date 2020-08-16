import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as utils from "util/util";
// import RecipeCard from "../components/RecipeCard";
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
      favorite: true
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

  constructor() { }

  ngOnInit(): void {
  }

  addOrRemoveFavorite(id, i) {

    if (this.tab[i].favorite == true) {
      this.tab[i].favorite = false;
    } else {
      this.tab[i].favorite = true;
    }

    // this.animate();
  }


  animate() {
    this.view.nativeElement.animate({
      backgroundColor: "#3D5AFE",
      duration: 500,
      curve: "easeIn"
    });

  }



}
