import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styles: []
})
export class AddFeedbackComponent implements OnInit {
  // Reactive Forms
  // step 1: Create a Form Group
  feedbackForm: FormGroup;
  isSaved: boolean;

  // Dependency Injection
  constructor( private feedbackService: FeedbackService) {

  }

  ngOnInit() {
    this.feedbackForm = new FormGroup( {
      // Step2: Create Form Control
      email: new FormControl('a@b.com', [ Validators.required, Validators.email ]),
      title: new FormControl('test', Validators.required),
      content: new FormControl('test 123', Validators.required)
    });

    // Step3: ref html 
  }

  onAddFeedbackHandler() {
    console.log(this.feedbackForm.value);

    // 1. send the data to service
    this.feedbackService.createFeedback(this.feedbackForm.value)
        .subscribe( (res: any) => { // 2. get the resp from service
          console.log(res);
          this.isSaved = true;
        });
  }

}
