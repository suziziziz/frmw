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
  use(key: any, value: any): any;
  set(key: any, value: any): any;
};
