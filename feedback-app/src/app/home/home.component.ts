import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .redText{
        color: red;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  /// ideal place for declaring public vars
  // String Interpolation related 
  devName: string = 'Arun';
  age: number = 20;
  skillsList: Array<string> = [
    'html', 'nodejs', 'graphql'
  ];


  // property binding related
  city: string = 'CHN';
  isLoggedIn: boolean = true;

  // two way binding related 
  course: string = 'Angular';

  constructor() { }

  ngOnInit() {

  }

  // ideal place to have methods
  getAge(): number {
    return this.age;
  }

  // event binding related
  onBtnClick( e) {
    alert('clicked');
    console.log(e);
   // e.target.innerText = "Clicked";
  }

}
