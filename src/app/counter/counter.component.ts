import {Component, Inject, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;
  counter;
  constructor(counter: CounterService) {
    this.counter = counter;
  }

  ngOnInit() {
    this.count = this.counter.count;
  }

  increase() {
    this.counter.increaseCount();
    this.count = this.counter.count;
  }

}
