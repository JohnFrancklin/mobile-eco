import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'ns-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  produit: {imagesrc:string,text:string,number:string,price:string}[]=[
    {imagesrc:"~/image/image2.jpg",text:"MacBook air mi 2020...",number:"4",price:"1000 ar"}, 
    {imagesrc:"~/image/image2.jpg",text:"MacBook air mi 2020...",number:"0",price:"1000 ar"},
    {imagesrc:"~/image/image2.jpg",text:"MacBook air mi 2020...",number:"8",price:"9000 ar"},
    {imagesrc:"~/image/image2.jpg",text:"MacBook air mi 2020...",number:"5",price:"8000 ar"},
    {imagesrc:"~/image/image2.jpg",text:"MacBook air mi 2020...",number:"4",price:"7000 ar"}
  ];

  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
