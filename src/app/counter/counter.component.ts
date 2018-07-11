import {Component, OnInit, Optional} from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;
  constructor(@Optional() private counter: CounterService) {
  }

  ngOnInit() {
    if (this.counter) {
      this.count = this.counter.count;
    } else {
      this.count = 100;
      console.log('Use the built-in counter');
    }
  }

  increase() {
    if (this.counter) {
      this.counter.increaseCount();
      this.count = this.counter.count;
    } else {
      this.count += 10;
      console.log('Use the built-in counter');
    }
  }

}
