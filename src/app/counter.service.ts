import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CounterService {
  constructor() {
  }

  private _count = 0;
  private _count$ = new BehaviorSubject(this._count);

  get count() {
    return this._count$;
  }

  increaseCount() {
    this._count++;
    this._count$.next(this._count);
  }
}
