import { EventOptions, EventRun } from '../main/interfaces';

export class Event {
  public name: string;
  public once?: boolean;
  public run: EventRun;
  constructor(data: EventOptions) {
    if (typeof data.name !== 'string') throw new Error('<Event>.name not provided properly! (String)');
    this.name = data.name;
    if (data.once && typeof data.once !== 'boolean') throw new Error('<Event>.once not provided properly! (Boolean) (optional)');
    this.once = data.once;
    if (typeof data.run !== 'function') throw new Error('<Event>.run not provided properly! (Function)');
    this.run = data.run;
  }
}
