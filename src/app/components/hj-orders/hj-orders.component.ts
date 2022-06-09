import { Component, OnInit } from '@angular/core';
import {HJDataService} from "../../services/hj-data.service";

@Component({
  selector: 'app-hj-orders',
  templateUrl: './hj-orders.component.html',
  styleUrls: ['./hj-orders.component.css']
})
export class HJOrdersComponent implements OnInit {

  public items$: any;

  constructor(private service: HJDataService) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.service.getAll().subscribe(response =>{
      this.items$ = response;
    })
  }

}
