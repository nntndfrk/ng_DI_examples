import {Component, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;
  constructor(private counter: CounterService) {
  }

  ngOnInit() {
    this.count = this.counter.count;
  }

  increase() {
    this.counter.increaseCount();
    console.log(`from Class - ${this.count}`);
    this.count = this.counter.count;
  }

}
