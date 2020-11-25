import './lifecycleEvents';
import './hooks';
import './DOMEvents';
import './utils';
import { EventService } from "./EventService";
import { watch } from "./utils";
import { template } from "@babel/core";

interface ComponentDef {
  id: number,
  name: string,
  state: any,
}

export interface ComponentInstance {
  id: number,
  selector: string,
  state: Object,
  template: ComponentTemplate
}

export interface ComponentTemplate extends Element {
  componentId?: number
}
/**
 * Functional component
 */
export type FC<IndividualComponentDef = any> = () => any;


export default class Dupa {

  private static _registeredComponents: ComponentInstance[] = [];

  public static registerComponent({ selector, initialState, template }): number {
    const idOfNewComponent: number = this._registeredComponents.length + 1;
    this._registeredComponents.push({
      id: idOfNewComponent,
      selector: selector,
      state: initialState,
      template
    });

    return idOfNewComponent;
  }

  public static instantiate(
    components: Component[]
  ): void {
    components.forEach((Component) => {
        // return new Component()
      // } else throw new Error('Provided component is not a function')
    });
  }


}

/**
 * Connects JS/TS component with his DOM equivalent
 *
 * @param selector - Selector to connect component logic with
 * @param state - The optional initial state
 */
export function connect({ selector, state = {} }): ComponentInstance  {
  const element: ComponentTemplate = document.querySelector(selector);

  const componentId: number = Dupa.registerComponent({
    selector: selector,
    initialState: state,
    template: element
  });

  element.setAttribute('componentId', String(componentId));

  return {
    id: componentId,
    selector: selector,
    state: state,
    template: element
  };
}

export class Component {
  selector?: string;

  constructor(selector: string = Component.name) {
    this.selector = selector;
  }

  public onMount(callback: Function) {
    return window.addEventListener('load', () => callback())
  };

  // onTemplateChange() {}
  // onUnmount() {}


}

export {

}
