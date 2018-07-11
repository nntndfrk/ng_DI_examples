import {Component, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';
// import {LoggerService} from '../logger.service';
import {OtherLoggerService} from '../other-logger.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
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
