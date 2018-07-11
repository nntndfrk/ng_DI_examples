export class CounterService {
  count = 0;

  increaseCount() {
    this.count++;
    console.log(`from Class - ${this.count}`);
    return this.count;
  }
}
