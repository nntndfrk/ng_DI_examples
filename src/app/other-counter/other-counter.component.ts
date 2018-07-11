import {Component, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-other-counter',
  templateUrl: './other-counter.component.html',
  styleUrls: ['./other-counter.component.css']
})
export class OtherCounterComponent implements OnInit {

  count: number;
  constructor(private counter: CounterService) {
  }

  ngOnInit() {
    this.count = this.counter.count;
  }

  increase() {
    this.counter.increaseCount();
    this.count = this.counter.count;
  }

}
