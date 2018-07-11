export class CounterService {
  constructor() {
  }

  private _count = 0;

  get count() {
    return this._count;
  }

  increaseCount() {
    this._count++;
    return this.count;
  }
}
