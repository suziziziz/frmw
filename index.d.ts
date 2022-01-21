export class Widget {
  key: any;
  widget: HTMLElement;

  private constructor(props: {}): HTMLElement;
  initState(props: {}): void;
  setState(cb: () => void | any): void;
}

export function render(element: HTMLElement, container: HTMLElement): void;

export function createStateManager(): {
  states: {};
  use(object: ThisType, value: any): any;
  set(object: ThisType, value: any): any;
};
