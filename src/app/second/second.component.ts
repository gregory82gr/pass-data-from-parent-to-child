import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit {
  constructor(private service: DataServiceService) {}
  messageFirst:string;

  ngOnInit(): void {
    this.service.messageFirst.subscribe((param: string) => {
      console.log('Second received: ' +param);
      this.messageFirst=param;
    });
  }
  send(message: string): void {
    this.service.messageSecond.next(message);
    console.log('Second send: '+ message);
  }
}
