import { Component } from '@angular/core';

// Decorator -- gets the meta data in the form of obj
// Unifies the component html, css, ts in the selector

@Component( {
  selector: 'app-root', // mandatory -- comp is exposed in a selector
  templateUrl: './app.component.html', // html -- mandatory -- only one
  styleUrls: ['./app.component.css'] // css -- optional -- can also be multiple
} )


export class AppComponent {
  // ts
  
}
