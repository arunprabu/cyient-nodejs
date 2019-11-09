import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {


  /*
    1. Create Custom Event 
      1.1. Declare a Var 
      1.2. Make it a Custom Event using @Output()
  */

  @Output() reportGenerated = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onSendDataHandler(){
     //2. Emit the Custom Event with data -- for parent comp to receive
     this.reportGenerated.emit("Success");
  }
}
