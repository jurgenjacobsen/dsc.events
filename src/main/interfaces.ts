import { Event } from '../structures/Event';

export type EventList = Map<string, Event>;

export interface EventOptions {
  name: string;
  once?: boolean;
  run: EventRun;
}

export interface EventHandlerOptions {
  bot: any;
  dir: string;
}

export interface EventRun {
  (bot: any, ...args: any): Promise<any> | any;
}
