import {BehaviorSubject} from 'rxjs';
import {LoggerService} from './logger.service';
import {OtherLoggerService} from './other-logger.service';

export class CounterService {
  constructor(
    private loggerService: LoggerService,
    private otherLoggerService: OtherLoggerService
  ) {
  }

  private _count = 0;
  private _count$ = new BehaviorSubject(this._count);

  get count() {
    return this._count$;
  }

  increaseCount() {
    this._count++;
    this.loggerService.log(this._count.toString());
    this.otherLoggerService.log(this._count.toString());
    this._count$.next(this._count);
  }
}
