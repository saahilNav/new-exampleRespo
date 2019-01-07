import { Component, OnInit, EventEmitter } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 public value:any;
 public value1=[];
 public event:EventEmitter<any>=new EventEmitter<any>();

  constructor(private interactionService:SendDataService) { 

  }

  ngOnInit() {
     this.interactionService.getData().subscribe( data => this.value =data)
    // this.interactionService.valueChange.subscribe(value =>this.value=value)
    //  this.interactionService.valueChange.subscribe(data => console.log(data,'that data'))
  }
  onClickGreetMethod(){
    // this.interactionService.sendMesaage('good Morning');
    // this.interactionService.setValue([{Summary:'Latest NEws On parent Component',NewsPic:'assets/flower.jpg'}]);
  }
  SendData(obj){
    // this.interactionService.event.emit(obj);
    this.interactionService.valueChange.next(obj);

   console.log(this.value);
  

  }
}
