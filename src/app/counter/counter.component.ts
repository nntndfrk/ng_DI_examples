import {Component, Injector, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;
  counter: CounterService; // CounterService только для типа
  constructor(private injector: Injector) {
    this.counter = this.injector.get(CounterService);
  }

  ngOnInit() {
    this.count = this.counter.count;
  }

  increase() {
    this.counter.increaseCount();
    this.count = this.counter.count;
  }

}
