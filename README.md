# redux-autoform-bootstrap-ui 

[![Build Status](https://travis-ci.org/redux-autoform/redux-autoform-bootstrap-ui.svg?branch=master)](https://travis-ci.org/redux-autoform/redux-autoform-bootstrap-ui) [![npm version](https://badge.fury.io/js/redux-autoform-bootstrap-ui.svg)](https://badge.fury.io/js/redux-autoform-bootstrap-ui) [![codecov](https://codecov.io/gh/redux-autoform/redux-autoform-bootstrap-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/redux-autoform/redux-autoform-bootstrap-ui) [![Coverage Status](https://coveralls.io/repos/github/redux-autoform/redux-autoform-bootstrap-ui/badge.svg?branch=master)](https://coveralls.io/github/redux-autoform/redux-autoform-bootstrap-ui?branch=master)

[![NPM](https://nodei.co/npm/redux-autoform-bootstrap-ui.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/redux-autoform-bootstrap-ui/) [![NPM](https://nodei.co/npm-dl/redux-autoform-bootstrap-ui.png?months=9&height=3)](https://nodei.co/npm/redux-autoform-bootstrap-ui/)

Bootstrap UI for [redux-autoform](https://github.com/redux-autoform/redux-autoform)

> Be patient. This documentation is still under construction. Pull-requests are welcome.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Introduction](#introduction)
- [Demo](#demo)
- [Getting started](#getting-started)
  - [Using](#using)
  - [Add the required third-party components](#add-the-required-third-party-components)
  - [Styling](#styling)
  - [Running the demo locally](#running-the-demo-locally)
- [Components](#components)
  - [TextBox](#textbox)
  - [TextArea](#textarea)
  - [CheckBox](#checkbox)
  - [Select](#select)
  - [Lookup](#lookup)
  - [DateTimePicker](#datetimepicker)
- [Contributing](#contributing)
- [Third party](#third-party)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Bootstrap UI for [redux-autoform](https://github.com/redux-autoform/redux-autoform).

## Demo

[Demo](https://redux-autoform.github.io/redux-autoform-bootstrap-ui/demo.html)

## Getting started

### Using

First, make sure you are familiar with [redux-autoform](https://github.com/redux-autoform/redux-autoform) and that you've read the [getting started section](https://github.com/redux-autoform/redux-autoform#using).

This project provides component factories for redux-autoform:

```js
import { EditComponentFactory, DetailsComponentFactory } from 'redux-autoform-bootstrap-ui';
```

Now all you have to do is to use AutoForm an pass one of the above factories as the `componentFactory` prop of the Autoform component. You can see the AntuForm props [here](https://github.com/redux-autoform/redux-autoform/blob/master/docs-md/documentation.md#autoform).

### Add the required third-party components

Components that are installed automatically:

- [redux-form](https://github.com/erikras/redux-form/).
- [react-bootstrap](http://react-bootstrap.github.io/).

Components that are need to be installed manually:

- [react-select](https://github.com/JedWatson/react-select).
- [react-widgets](https://github.com/jquense/react-widgets).

### Styling

- Import `styles.less` file. This file contains infrastructural styling.
- Import `styles-defaultfactories.less`. This file contains styles related to the components used in the Bootstrap factories. (ToDo: Rename this file to `bootstrap.theme.less`)
- import the thid-party styles for the components used in the default factories. The example below lists what have to be imported:

**yourstyles.less**:

    @import './node_modules/bootstrap/less/bootstrap.less';
    @import './node_modules/font-awesome/less/font-awesome.less';
    @import './node_modules/react-widgets/dist/css/react-widgets.css';
    @import './node_modules/react-select/dist/react-select.css';
    @import './node_modules/redux-autoform/lib/less/styles';
    @import './node_modules/redux-autoform/lib/less/styles-defaultfactories';

Alternatively, if you're using webpack with `css-loader` and `less-loader`, which you probably are, you can just import these less files directly in your JavaScript.

### Running the demo locally

In order to understand how Redux-Autoform and Redux-Autoform-Bootstrap-UI works, a good path is to run the demo locally and see how it works:

    npm run start
    
Now the demo should be available here: [http://localhost:4000/](http://localhost:4000/).

## Components

### Common metadata

Metadata that is common to most of the components.

Metadata | Description
--- | ---
displayName | The user-friendly name for the field.
component | Which component to use. 
readOnly | Whether or not the component should be in read-only state.
help | Additional help so the end-user knows what the field is about.

### TextBox

Specific metadata for the `TextBox` component. Common metadata is not listed.

Metadata | Description
--- | ---
placeholder | The text that should be displayed as a hint when there's no value.
addonBefore | The text that should be added-on before the component.
addonAfter | The text that should be added-on after the component.

[TextBox demo](https://redux-autoform.github.io/redux-autoform-bootstrap-ui/demo.html?preset=componentsTextBox)

### TextArea

Specific metadata for the `TextBox` component. Common metadata is not listed.

Metadata | Description
--- | ---
placeholder | The text that should be displayed as a hint when there's no value.
addonBefore | The text that should be added-on before the component.
addonAfter | The text that should be added-on after the component.
rows | The number of rows.

[TextArea demo](https://redux-autoform.github.io/redux-autoform-bootstrap-ui/demo.html?preset=componentsTextArea)

### CheckBox

[Checkbox demo](https://redux-autoform.github.io/redux-autoform-bootstrap-ui/demo.html?preset=componentsCheckbox).

### Select

Specific metadata for the `Select` component. Common metadata is not listed.

Metadata | Description
--- | ---
options | The options to display. Options are an array of objects with two properties: **value**: The actual value that is stored in the model. **text**: What is displayed to the user

[Select demo](https://redux-autoform.github.io/redux-autoform-bootstrap-ui/demo.html?preset=componentsSelect).

### Lookup

Specific metadata for the `Lookup` component. Common metadata is not listed.

Metadata | Description
--- | ---
options (array) | The options to display. Options is an array of objects with two properties: **value**: The actual value that is stored in the model; **label**: What is displayed to the user
options (object) | The options to display. Options is an object containing three properties: **url**: The URL to call for data. This call should return an array of objects. **valueKey**: In the resulting Array, this is the name of the property that should contain the actual value. **labelKey**: In the resulting Array, this is the name of the property that should contain the label.

[Lookup demo](https://redux-autoform.github.io/redux-autoform-bootstrap-ui/demo.html?preset=componentsLookup).

### DateTimePicker

Specific metadata for the `DateTimePicker` component. Common metadata is not listed.

Metadata | Description
--- | ---
format | Any format supported by [Moment.js](http://momentjs.com/docs/#/parsing/string-format/). Defaults to your locale configuration. Make sure you have it properly configured.  


[DateTimePicker demo](https://redux-autoform.github.io/redux-autoform-bootstrap-ui/demo.html?preset=componentsDateTimePicker).


## Contributing

**Pull-requests are really really welcome**. If you don't know what to contribute with, please check the [issues](https://github.com/redux-autoform/redux-autoform-bootstrap-ui/issues).
 
We'll be more than glad to invite frequent contributors to join the organization.
If you need help understanding the project, please post an issue and I'll do my best to reply and make sure you understand everything
you need.

In order to make a pull request:

 1. Fork it.
 2. Create your feature-branch git checkout -b your-new-feature-branch
 3. Commit your change git commit -am 'Add new feature'
 4. Push to the branch git push origin your-new-feature-branch
 5. Create new Pull Request with master branch

## Third party

Components this project rely on:

 - [redux-form](https://github.com/erikras/redux-form/).
 - [react-bootstrap](http://react-bootstrap.github.io/).
 - [react-select](https://github.com/JedWatson/react-select).
 - [react-widgets](https://github.com/jquense/react-widgets).

License
---
`redux-autoform` is [MIT](https://github.com/redux-autoform/redux-autoform-bootstrap-ui/blob/master/LICENSE) licensed.