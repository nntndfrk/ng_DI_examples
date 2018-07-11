export class CounterService {
  count = 0;

  constructor(private config: {startValue: number}) {
    this.count = this.config.startValue;
  }


  increaseCount() {
    this.count++;
    console.log(`from Class - ${this.count}`);
    return this.count;
  }
}
