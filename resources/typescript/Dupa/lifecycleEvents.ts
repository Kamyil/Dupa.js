import { EventService } from "./EventService";
import { ComponentTemplate } from "./index";
import { watch } from "./utils";

export function onMount(callback: Function) {
  window.addEventListener('load', () => callback())
}

export function onTemplateChange(callback: Function, template: ComponentTemplate): void {
  EventService.on(`${template.componentId}.template.change`, () => console.log('Template changes!'));
}

export function onStateChange(callback: Function, state: any): void {
  watch(state, callback);
}

export function onComponentChange(callback: Function, component: Object): void {
  watch(component, callback);
}

export function onConnect(callback: Function) {

}





















