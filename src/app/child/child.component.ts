import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

public value2=[];
public value:any;

  constructor( private interactionService:SendDataService ) { }

  ngOnInit() {      
  
    this.interactionService.valueChange.subscribe(data=>{this.value=data
      console.log("child data")}
      )
}
}
