import { Widget } from "../index.js";

class VanillaElement extends Widget {
  initState(props) {
    this.tagName = props.tagName;
    this.children = props?.children;
    this.onclick = props?.onclick;
  }

  build() {
    const el = document.createElement(this.tagName);
    this.children && el.append(...this.children);
    el.onclick = this.onclick;
    return el;
  }
}

export function vanillaElement(tagName, props) {
  return new VanillaElement({ tagName, ...props });
}
