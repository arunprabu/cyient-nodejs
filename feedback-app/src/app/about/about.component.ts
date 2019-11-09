import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {


  today = new Date();

  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium placeat maiores labore cupiditate esse dolores laudantium ipsam nobis. Totam vero praesentium natus laudantium pariatur? Reprehenderit ipsum libero recusandae maiores.'
  constructor() { }

  ngOnInit() {
  }

}
