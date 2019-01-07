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
//   this.interactionService.valueChange.subscribe(value => this.value2=value); 
}
setValue(){

//   this.interactionService.setValue([{Description:'No description please',Editor:'new Shiv',NewsPic:'assets/flower.jpg'}]);
}
// setValue(data){
//    this.interactionService.setValue(data);
//   console.log(data ,"child data")
// }
}
