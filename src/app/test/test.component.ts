import { Component, OnInit } from '@angular/core';
import * as utils from "util/util";
// import RecipeCard from "../components/RecipeCard";
// import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@Component({
  selector: 'ns-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  itemList = [
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
    {
      name: "rakoto",
      description: "rabe"
    },
  ];

  nom = "ok john";


  constructor() { }

  ngOnInit(): void {
  }

}
