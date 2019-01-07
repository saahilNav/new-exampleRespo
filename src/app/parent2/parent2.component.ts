import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';
import { DataTypes } from '../Datatype';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {
  data:DataTypes;
  constructor(private exService:SendDataService) { }

  ngOnInit() {
    // this.exService.valueChange.subscribe(data =>{this.data=data 
      // console.log('this is data',data)});

      this.exService.valueChange.subscribe(data => {this.data= data 
     
        console.log(data,"parent2")});

  }
 
  getDatFromComponent(){

  }
}
