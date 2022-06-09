import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hj-orders-item',
  templateUrl: './hj-orders-item.component.html',
  styleUrls: ['./hj-orders-item.component.css']
})
export class HjOrdersItemComponent implements OnInit {

  @Input() item?: any;
  @Input() id?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
