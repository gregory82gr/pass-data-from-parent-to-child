import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  messageFirst = new Subject();
  messageSecond = new Subject();

  constructor() {
  }
}
