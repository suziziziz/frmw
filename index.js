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
    use(object, value) {
      if (object.key && object.key in this.states) {
        return this.states[object.key];
      } else if (object.key) {
        this.states[object.key] = value;
        return value;
      }
      return value;
    },
    set(object, value) {
      if (object.key) {
        this.states[object.key] = value;
        return value;
      }
      return value;
    },
  };
}
