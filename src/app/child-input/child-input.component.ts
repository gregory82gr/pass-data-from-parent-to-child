import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrl: './child-input.component.css'
})
export class ChildInputComponent implements OnChanges{
  //@Input() count: number;

  private _count = 0;

  ngOnChanges(changes: SimpleChanges): void {
    for (let property in changes) {
      if (property === 'count') {
        // console.log('Previous:', changes[property].previousValue);
        // console.log('Current:', changes[property].currentValue);
        // console.log('firstChange:', changes[property].firstChange);
      }
    }
  }

  @Input()
  set count(count: number) {
    this._count = count;
    console.log(count);
  }
  get count(): number { return this._count; }
}
