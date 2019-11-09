import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  /*
    1. Create Custom Property 
      1.1. Declare a Var 
      1.2. Make it a Custom Property using @Input()
  */

  @Input() company: string;

  constructor() { }

  ngOnInit() {
  }
}
