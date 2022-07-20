import { Component } from '@angular/core';
import { FeedbackService } from './services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-2022';
  isLoading = false;

  constructor (private feedbackSvc: FeedbackService) {
    this.feedbackSvc.loading.subscribe ({
      next: (isLoading) => {
        this.isLoading = isLoading;
      },
    });
  }
}
