import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { FeedbackDetailsComponent } from './feedback/feedback-details/feedback-details.component';
import { AuthGuard } from './shared/guards/auth.guard';

// Config the routes
const routes: Routes = [
  // Syntax = path: '/', component: ''
  { path: '', component: HomeComponent },
  { 
    path: 'feedback', children: [
      { path: '', component: FeedbackComponent },
      { path: 'new', component: AddFeedbackComponent },
      { path: ':id', component: FeedbackDetailsComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
