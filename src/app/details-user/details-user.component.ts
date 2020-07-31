import { Component, OnInit } from '@angular/core';
import { Page} from 'tns-core-modules/ui/page/page';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

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
