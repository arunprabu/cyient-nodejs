import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: []
})
export class FeedbackComponent implements OnInit, OnDestroy {

  feedbackList: any[];
  feedbackSubscription: Subscription;

  constructor( private feedbackService: FeedbackService) { 
    console.log("Inside constructor");
  }

  //Life cycle Hook 
  ngOnInit() {
    console.log("Inside ngOnInit");

    // ideal place for you to fire ajax calls
    this.feedbackSubscription = this.feedbackService.getFeedbackList()
      .subscribe( (res: any[]) => {
        console.log(res);
        this.feedbackList = res;
      });
  }

  ngOnDestroy() {

    console.log("Inside destroy");
    //ideal place for unsubscribing observables
    this.feedbackSubscription.unsubscribe();

    // cleaning up the data
    if( this.feedbackList ) {
      this.feedbackList.length = 0;
    }
  }


}
