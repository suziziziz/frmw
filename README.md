# FRMW

**STATUS**: BETA

FRMW is a frontend framework for creating dynamic interfaces, just like Vue, React, Angular, etc. It is based on React and Flutter.

My idea is... none actually it's just a test but if you want to try it follow the instructions 👇

## START

Start by adding this to your project

```bash
$ npm i frmw
```

Try this using with [parcel](https://www.npmjs.com/package/parcel)

## USAGE (WITH PARCEL)

Add parcel

```bash
$ npm i parcel
```

Create the following files in the root directory, and paste the following codes into them. The comments will guide you.

> `index.js`

```javascript
import { Widget, render } from "frmw";
// There are two of this item, the vanillaElement and VanillaElement
// The VanillaElement is the class to vanilla HTML elements
// The vanillaElement is a VanillaElement converted to function
// I recommend to use the function vanillaElement
import { vanillaElement as e } from "frmw/widgets";

// This is the "cleanest" way to create an element with FRMW,
// because it dispenses with the use of so many instancers
// in the future.
// But if you want, you can create your element as a class.
function App(props) {
  return new (class extends Widget {
    // Here you create your variables in the element.
    // Please don't use the constructor, it won't work,
    // and I don't know why
    // Note: The initState has a parameter to provide props, which
    // can be used if you want to create the element as a class.
    initState() {
      this.likes = props.likes;
    }

    // The element must be returned in this function
    // The element is not mutable, only the elements inside
    // the container.
    build() {
      // Here the element "div" encapsulates everything
      // that will be displayed, including itself. However, as
      // said before, the element that encapsulates everything does
      // not change, only when the parent element of this widget
      // updates.
      return e("div", {
        // The children parameter holds all other elements. The
        // parameter name does not have to be children, it can be
        // any other name, and it can be more than one parameter
        // that does the same function.
        children: [
          e("button", {
            children: [`We Have ${this.likes} like(s)`],
            onclick: () => this.setState(() => this.likes++),
          }),
        ],
      });
    }
  })();
}

// Finally, the render function. It serves to render a component
// on the screen. There should only be one of them per page.
render(App({ likes: 0 }), document.querySelector("#app"));
```

> `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FRMW APP</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="index.js" type="module"></script>
  </body>
</html>
```

And then run

```bash
$ npx parcel serve index.html
```

Or that, to create a build version

```bash
$ npx parcel index.html
```

## LINKS

[SOURCE CODE](https://github.com/suziziziz/frmw)
