# React Alegrify UI

[![NPM](https://nodei.co/npm/react-alegrify-ui.png)](https://npmjs.org/package/react-alegrify-ui)

## What is React Alegrify UI?

[Alegrify](https://alegrify.com) is an innovative solution to track your mental health and to become happier.

As we believe human knowledge should be shared, we made some of our User Interface Elements available 
for everyone who wants to use it.

This repo is a React implementation of the available elements.

## How to use

First, install the dependency with yarn, npm or any alternative:

```bash
yarn add react-alegrify-ui
```

Next, add the CSS file into your project.
Most react projects support CSS imports (e.g. projects that are set up with create-react-app).
In those cases, this should do the trick:

```js
import '../node_modules/alegrify-ui/alegrify-ui.min.css';
```

In any other case manually include the [alegrify-ui.min.css](https://raw.githubusercontent.com/dejakob/alegrify-ui/master/alegrify-ui.min.css) file into your html file:

```html
<link rel="stylesheet" href="<PATH>/alegrify-ui.min.css" />
```

When these steps are fulfilled, you can easily import any component by doing

```js
import { Button } from 'react-alegrify-ui';
```

## Components

* [Button](./docs-build/button.html)
* [Card](./docs-build/card.html)
* [Checkbox](./docs-build/checkbox.html)
* [Dialog](./docs-build/dialog.html)
* [Dl](./docs-build/dl.html)
* [Drawer](./docs-build/drawer.html)
* [Dropdown](./docs-build/dropdown.html)
* [Footer](./docs-build/footer.html)
* [Grid](./docs-build/grid.html)
* [Input](./docs-build/input.html)

## "I only want CSS"

If you only want to use CSS, take a look here: [Alegrify UI](https://dejakob.com/alegrify-ui).