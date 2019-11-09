import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styles: []
})
export class FeedbackDetailsComponent implements OnInit {

  feedbackData: any;
  duplicateFeedbackData: any;

  constructor( private feedbackService: FeedbackService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //reading url params in angular 
    let feedbackId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(feedbackId);

    this.feedbackService.getFeedbackById(feedbackId)
      .subscribe( (res: any) => {
        console.log(res);
        this.feedbackData = res;

        this.duplicateFeedbackData = JSON.parse( JSON.stringify(this.feedbackData) );
        
      });

  }


  async onUpdateHandler(){
    console.log(this.duplicateFeedbackData);
    var status = await this.feedbackService.updateFeedback(this.duplicateFeedbackData)
    console.log(status);
  }
}
