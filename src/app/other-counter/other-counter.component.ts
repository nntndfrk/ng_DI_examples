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
    this.counter.count.subscribe(c => this.count = c);
  }

  increase() {
    this.counter.increaseCount();
  }

}
