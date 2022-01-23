export class Widget {
  build() {}
  constructor(props) {
    this.key = props?.key;
    this.initState(props);
    this.widget = this.build();
    return this.widget;
  }
  initState(props) {}
  setState(cb = () => {}) {
    cb();
    this.widget.innerHTML = "";
    this.widget.append(...this.build().childNodes);
  }
}

export function render(element, container) {
  container.innerHTML = "";
  container.append(element);
}

export function createStateManager() {
  return {
    states: {},
    use(key, value) {
      if (key && key in this.states) {
        return this.states[key];
      } else if (key) {
        this.states[key] = value;
        return value;
      }
      return value;
    },
    set(key, value) {
      if (key) {
        this.states[key] = value;
        return value;
      }
      return value;
    },
  };
}

export function createContext(values = (contextFunctions) => ({})) {
  return {
    ...values({
      watchers: [],
      watch(thisElement) {
        this.watchers.push(thisElement);
      },
      notify() {
        this.watchers.map((value) => value.setState());
      },
    }),
  };
}
