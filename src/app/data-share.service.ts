import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  videoData = new ReplaySubject<string>(3);

  constructor() { }

}