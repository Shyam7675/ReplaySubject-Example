import { Component, OnInit, VERSION } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataShareService } from './data-share.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userOneList = ['shyam', 'kishan'];
  userTwoList = [];

  constructor(public _DataSerivece: DataShareService) {}

  ngOnInit() {
    this._DataSerivece.videoData.subscribe((res) => {
      this.userOneList.push(res);
    });
  }

  onAddVideo(videoInput) {
    this._DataSerivece.videoData.next(videoInput.value);
  }
  subscriptionUser2: Subscription;
  secondUserSubMode: boolean = false;
  onSubscribe() {
    if (this.secondUserSubMode) {
      this.subscriptionUser2.unsubscribe();
    } else {
      this.subscriptionUser2 = this._DataSerivece.videoData.subscribe((res) => {
        this.userTwoList.push(res);
      });
    }
    this.secondUserSubMode = !this.secondUserSubMode;
  }
}
