import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: []
})
export class FeedbackComponent implements OnInit {

  feedbackList: any[];

  constructor( private feedbackService: FeedbackService) { 
    console.log("Inside constructor");
  }

  //Life cycle Hook 
  ngOnInit() {
    console.log("Inside ngOnInit");

    // ideal place for you to fire ajax calls
    this.feedbackService.getFeedbackList()
      .subscribe( (res: any[]) => {
        console.log(res);
        this.feedbackList = res;
      });
  }

}
