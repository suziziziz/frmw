import { Widget } from "../index.js";

export class VanillaElement extends Widget {
  initState(props) {
    this.props = props;
  }

  build() {
    /** @type {HTMLElement} */
    const el = document.createElement(this.props.tagName);
    this.props.children && el.append(...this.props.children);
    for (const key in this.props) {
      const element = this.props[key];
      switch (key) {
        case "tagName":
          break;
        case "children":
          break;
        case "classname":
          el.setAttribute("class", element);
          break;

        default:
          if (Object.hasOwnProperty.call(this.props, key)) {
            el[key] = element;
          }
          break;
      }
    }
    return el;
  }
}

export function vanillaElement(tagName, props) {
  return new VanillaElement({ tagName, ...props });
}
