import { Component, OnInit } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';
import { AndroidData, ShapeEnum } from 'nativescript-ngx-shadow';

@Component({
  selector: 'ns-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
  Shadow: AndroidData = {
    elevation: 10,
    bgcolor: "#0061ad",
    shape: ShapeEnum.RECTANGLE, 
    cornerRadius:15,
  };
  
  fabShadow: AndroidData = {
    elevation: 10,
    cornerRadius:15,
  };

  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
