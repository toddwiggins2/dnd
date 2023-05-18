import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  numberofAttacksHTML = 3;
  dieNumberHTML: any;
  bonusHitValueHTML: any;
  dieTypeHTML: any;
  bonusDamageValueHTML: any;
  bonusRageDamageValueHTML: any;
  checkBless: any;
  checkBane: any;
  constructor() { }

  ngOnInit(): void {
  }

}
