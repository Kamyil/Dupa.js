import { EventService } from "./EventService";
import { ComponentInstance, ComponentTemplate } from "./index";

export const $ = (selector: string) => document.querySelector(selector);
export const $All = (selector: string) => document.querySelectorAll(selector);

export const once = (fn: Function) => () => {
  if (!fn) throw new Error('No function provided! Provide function to be able to run it once only!');
  fn();
  fn = null;
};

export function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export function memo(functionToMemoize: Function) {
  const cache = {};

  //named functions are awesome!
  function cacher(func) {
    return function () {
      let key = JSON.stringify(arguments);
      if (cache[key]) {
        return cache[key];
      } else {
        functionToMemoize = func.apply(this, arguments);
        cache[key] = functionToMemoize;
        return functionToMemoize;
      }
    }
  }
    return cacher(functionToMemoize);
  }

export function observable(valueToObserve: Object | Array<Object>, onChangeCallback: Function): ProxyConstructor {
  const handler = {
    get(target, property, receiver) {
      try {
        return new Proxy(target[property], handler);
      } catch (err) {
        return Reflect.get(target, property, receiver);
        throw new Error(err);
      }
    },
    defineProperty(target, property, descriptor) {
      console.log('im here 2');
      onChangeCallback();
      console.log('im here 3');
      return Reflect.defineProperty(target, property, descriptor);
    },
    deleteProperty(target, property) {
      onChangeCallback();
      return Reflect.deleteProperty(target, property);
    }
  };

  return new Proxy(valueToObserve, handler);
};

export const watch = observable;
