export class LoggerService {

  constructor() {
  }

  log(msg: string) {
    console.log(`MainLogger: ${msg}`);
  }
}
