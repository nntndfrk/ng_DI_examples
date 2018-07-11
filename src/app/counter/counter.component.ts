import {Component, Inject, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';
import {LOCAL_COUNTER} from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;

  // CounterService - используется просто как тип
  constructor(@Inject(LOCAL_COUNTER) public counter: CounterService) {
  }

  ngOnInit() {
    this.count = this.counter.count;
  }

  increase() {
    this.counter.increaseCount();
    this.count = this.counter.count;
  }

}
