import { onMount } from "./lifecycleEvents";

export const onClick = (element: Element, callback: EventListenerOrEventListenerObject) => element.addEventListener('click', callback);
// Syntax sugar
export const onLoad = onMount;
