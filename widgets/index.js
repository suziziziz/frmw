import { Widget } from "../index.js";

export class VanillaElement extends Widget {
  initState(props) {
    this.props = props;
  }

  build() {
    const el = document.createElement(this.props.tagName);
    this.props.children && el.append(...this.props.children);
    for (const key in this.props) {
      if (key === "tagName" || key === "children") continue;
      if (Object.hasOwnProperty.call(this.props, key)) {
        const element = this.props[key];
        el[key] = this.props[key];
      }
    }
    return el;
  }
}

export function vanillaElement(tagName, props) {
  return new VanillaElement({ tagName, ...props });
}
