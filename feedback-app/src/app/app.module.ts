import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CpbComponent } from './home/cpb/cpb.component';
import { CebComponent } from './home/ceb/ceb.component';

// Main Switching box 
// Decorator -- takes in metadata as object
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FeedbackComponent,
    AboutComponent,
    ContactComponent,
    CpbComponent,
    CebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // Step 3: AppModule should be bootstrapped with a Component -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
