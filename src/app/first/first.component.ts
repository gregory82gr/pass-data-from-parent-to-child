import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  constructor(private service: DataServiceService) {}
  messageSecond:string;
  ngOnInit(): void {
    this.service.messageSecond.subscribe((param: string) => {
      console.log('First received: ' + param);
      this.messageSecond=param;
    });
  }

  send(message: string): void {
    this.service.messageFirst.next(message);
    console.log('First send: '+ message);

  }
}
