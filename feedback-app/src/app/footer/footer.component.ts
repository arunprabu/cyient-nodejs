import { Component, OnInit, ViewEncapsulation } from '@angular/core';


// -is -it for max 10 lines inside
@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-nav>
      <p>Copyright &copy; 2019</p>
    </div>
  `,
  styles: [
    
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
