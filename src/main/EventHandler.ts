import { EventHandlerOptions, EventList } from './interfaces';
import { readdirSync } from 'fs';
import { Event } from '../structures/Event';

export class EventHandler {
  public options: EventHandlerOptions;
  public list: EventList;
  constructor(options: EventHandlerOptions) {
    if (!options.bot) throw new Error('A valid bot should be provided!');
    if (typeof options.dir !== 'string') throw new Error('Events directory should be a string');

    this.options = options;
    this.list = new Map();

    this._load();

    this.list.forEach((e) => {
      this.options.bot.on(e.name, (...args: any) => e.run(this.options.bot, ...args));
    });
  }

  private _load() {
    for (let file of readdirSync(this.options.dir)) {
      let { event } = require(`${this.options.dir}/${file}`);
      let e = new Event(event);
      this.list.set(e.name, e);
    }
  }
}
