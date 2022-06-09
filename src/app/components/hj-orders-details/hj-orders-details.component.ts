import { Component, OnInit } from '@angular/core';
import {HJDataService} from "../../services/hj-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hj-orders-details',
  templateUrl: './hj-orders-details.component.html',
  styleUrls: ['./hj-orders-details.component.css']
})
export class HjOrdersDetailsComponent implements OnInit {
  public item: any;

  constructor( private service: HJDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) =>{
      id = params.get('id');
    })

    this.service.getById(id).subscribe((res:any)=>{
      this.item = res[0];
    })
  }

}
