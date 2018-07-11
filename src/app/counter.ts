import {InjectionToken} from '@angular/core';
import {CounterService} from './counter.service';

export const localCounter = {
  count: 0,
  increaseCount: function () {
    this.count += 2;
    console.log(`from Object - ${this.count}`);
    return this.count;
  }
};

export const LOCAL_COUNTER = new InjectionToken<CounterService>('qwerty');
