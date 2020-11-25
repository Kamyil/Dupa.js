export class EventService {

  // List of subscriptions currently in use
  private static _events = {};

  public static trigger(eventName: string, ...data: any) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((eventHandler) => eventHandler(data));
    } else throw new Error(`There is no such an event like: ${eventName}. Subsribe to it with on() method first, then trigger it properly!`);
  } 

  public static on(eventName, eventHandler) {
    console.log(this._events);
    if (this._events) {
      this._events[eventName] = this._events[eventName] || [];
      this._events[eventName].push(eventHandler);
    } else throw new Error('PubSub is not initialized! Initialize it in main.ts first!');
  }


  public static removeEventListener(eventName, callback) {
    this._events[eventName].remove(callback);
  }
};


