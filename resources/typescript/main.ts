
import Dupa, { Component } from "./Dupa";
import { App } from './Components/App';

/** @jsx dom */
const dom = (name, props, ...children) => {
  const element = document.createElement(name);

  Object.keys(props || {}).forEach(key => {
    if (key === 'style') {
      Object.keys(props[key]).forEach(styleKey => {
        element.style[styleKey] = props[key][styleKey];
      });
    } else {
      element[key] = props[key];
    }
  });

  return element;
}

document.getElementById('root').appendChild(App());