export class Widget {
  key: any;
  private widget: HTMLElement;

  private constructor(props: {}): HTMLElement;
  initState(props: {}): void;
  setState(cb: () => void | any): void;
  build(): HTMLElement;
}

export function render(element: HTMLElement, container: HTMLElement): void;

export function createStateManager(): {
  states: Object;
  use<Value>(key: any, value: Value): Value;
  set<Value>(key: any, value: Value): Value;
};

export function createContext<
  Values,
  ContextFunctions = {
    watchers: any[];
    watch(thisElement: any): void;
    notify(): void;
  }
>(values: (contextFunctions: ContextFunctions) => Values): ContextFunctions & Values;
