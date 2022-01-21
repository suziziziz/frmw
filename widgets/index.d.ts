import { Widget } from "..";

export class VanillaElement extends Widget {
  tagName: string;
  children?: HTMLElement[];
}

export function vanillaElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props: HTMLElementEventMap
): HTMLElementTagNameMap<K>;
