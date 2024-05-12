import { Any } from 'types';

type Listener = (...args: Any[]) => void;
interface IEvents {
  [event: string]: Listener[];
}

/**
 * @classdesc This class is just for function
 * @desc Using an EventEmitterHandler, we can add an action (EventEmitter.once('uniqueName', Listener)) that will be performed after calling the corresponding action (EventEmitter.emit('uniqueName', Listener))
 */
class EventEmitterHandler {
  private readonly events: IEvents = {};

  // public on(event: string, listener: Listener): () => void {
  //   if (typeof this.events[event] !== 'object') {
  //     this.events[event] = [];
  //   }
  //
  //   this.events[event].push(listener);
  //   return () => this.removeListener(event, listener);
  // }

  /**
   * @param eventName similar for once event and unique name
   * */
  public removeListener(eventName: string): void {
    if (typeof this.events[eventName] !== 'object') {
      return;
    }

    this.events[eventName] = [];
  }

  // public removeAllListeners(): void {
  //   Object.keys(this.events).forEach((event: string) =>
  //     this.events[event].splice(0, this.events[event].length),
  //   );
  // }

  /**
   * @desc This method calls the corresponding method
   * @param eventName similar for once event and unique name
   * @param args Arguments that the function receives EventEmitter once Listener
   */
  public emit(eventName: string, ...args: Any[]): void {
    if (typeof this.events[eventName] !== 'object') {
      return;
    }

    [...this.events[eventName]].forEach(listener => listener.apply(this, args));
  }

  /**
   * @desc This method adds the event uniquely, so there is no need to remove it in the return
   * @param eventName similar for emit event and unique name
   * @param listener callback function
   */
  public once(eventName: string, listener: Listener): void {
    if (typeof this.events[eventName] !== 'object') {
      this.events[eventName] = [];
    }

    this.events[eventName] = [listener];
  }
}

export const EventEmitter = new EventEmitterHandler();
