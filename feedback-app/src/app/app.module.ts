import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { FeedbackDetailsComponent } from './feedback/feedback-details/feedback-details.component';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';


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
    CebComponent,
    AddFeedbackComponent,
    FeedbackDetailsComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  // Step 3: AppModule should be bootstrapped with a Component -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
