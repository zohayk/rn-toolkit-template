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

  // public removeListener(event: string, listener: Listener): void {
  //   if (typeof this.events[event] !== 'object') {
  //     return;
  //   }
  //
  //   const idx: number = this.events[event].indexOf(listener);
  //   if (idx > -1) {
  //     this.events[event].splice(idx, 1);
  //   }
  // }

  // public removeAllListeners(): void {
  //   Object.keys(this.events).forEach((event: string) =>
  //     this.events[event].splice(0, this.events[event].length),
  //   );
  // }

  /**
   * @desc This method calls the corresponding method
   * @param event similar for once event and unique name
   * @param args Arguments that the function receives EventEmitter once Listener
   */
  public emit(event: string, ...args: Any[]): void {
    if (typeof this.events[event] !== 'object') {
      return;
    }

    [...this.events[event]].forEach(listener => listener.apply(this, args));
  }

  /**
   * @desc This method adds the event uniquely, so there is no need to remove it in the return
   * @param event similar for emit event and unique name
   * @param listener callback function
   */
  public once(event: string, listener: Listener): void {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }

    this.events[event] = [listener];
  }
}

export const EventEmitter = new EventEmitterHandler();
