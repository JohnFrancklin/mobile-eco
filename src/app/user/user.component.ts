import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  selector: 'ns-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private page: Page,
    private fonticon: TNSFontIconService) {  }


  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
