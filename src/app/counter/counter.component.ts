import {Component, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;

  constructor(
    private counter: CounterService
  ) {
  }

  ngOnInit() {
    this.counter.count.subscribe(c => {
      this.count = c;
    });
  }

  increase() {
    this.counter.increaseCount();
  }

}
