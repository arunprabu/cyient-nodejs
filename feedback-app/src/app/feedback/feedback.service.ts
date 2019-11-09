import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  restAPIUrl =  'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }


  // 1. get the data from comp
  createFeedback( feedbackData ) {
    console.log(feedbackData);
    // 2. send the data to rest api
      // 2.1 rest api end point - http://localhost:3000/api/feedback 
      // 2.2 use the http client to connect to rest api 

    return this.http.post(this.restAPIUrl, feedbackData)
        .pipe( map( res  => {  // 3. get the resp from rest api
          console.log(res);
          return res; //// 4. send it back to comp
        }));
  }


  getFeedbackList( ) {

    return this.http.get(this.restAPIUrl)
        .pipe( map( res  => {
          console.log(res);
          return res; 
        }));
  }

  getFeedbackById( id ){
    console.log(id);

    let feedbackIdUrl = this.restAPIUrl+'/'+id;
    return this.http.get( feedbackIdUrl )
      .pipe( map( res  => {
        console.log(res);
        return res;
      }));
  }

  updateFeedback( feedbackData) {
    console.log( feedbackData );
  }
}
