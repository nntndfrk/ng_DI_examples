import {Component, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';
import {OtherLoggerService} from '../other-logger.service';

@Component({
  selector: 'app-other-counter',
  templateUrl: './other-counter.component.html',
  styleUrls: ['./other-counter.component.css']
})
export class OtherCounterComponent implements OnInit {

  count: number;

  constructor(
    private counter: CounterService,
    private logger: OtherLoggerService
  ) {
  }

  ngOnInit() {
    this.counter.count.subscribe(c => {
      this.count = c;
      this.logger.log(c.toString());
    });
  }

  increase() {
    this.counter.increaseCount();
  }

}
