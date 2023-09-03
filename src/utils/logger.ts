interface Prop extends Console { }

class Logger {
  private carrier: Prop;

  constructor(carrier: Prop) {
    this.carrier = carrier;
  }

  public log(message: unknown, ...optionalParams: any[]) {
    if (import.meta.env.MODE === 'development') {
      this.carrier.log(message, optionalParams);
    }
  }

  public info(message: unknown, ...optionalParams: any[]) {
    if (import.meta.env.MODE === 'development') {
      this.carrier.info(message, optionalParams);
    }
  }

  public error(message: unknown, ...optionalParams: any[]) {
    if (import.meta.env.MODE === 'development') {
      this.carrier.error(message, optionalParams);
    }
  }
}


export const logger = new Logger(console);
