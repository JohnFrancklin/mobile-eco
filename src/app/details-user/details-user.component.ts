import { Component, OnInit } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
  
  constructor(private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
