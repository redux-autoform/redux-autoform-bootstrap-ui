# redux-autoform-bootstrap-ui 

[![Build Status](https://travis-ci.org/redux-autoform/redux-autoform-bootstrap-ui.svg?branch=master)](https://travis-ci.org/redux-autoform/redux-autoform-bootstrap-ui) [![npm version](https://badge.fury.io/js/redux-autoform-bootstrap-ui.svg)](https://badge.fury.io/js/redux-autoform-bootstrap-ui) [![codecov](https://codecov.io/gh/redux-autoform/redux-autoform-bootstrap-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/redux-autoform/redux-autoform-bootstrap-ui) [![Coverage Status](https://coveralls.io/repos/github/redux-autoform/redux-autoform-bootstrap-ui/badge.svg?branch=master)](https://coveralls.io/github/redux-autoform/redux-autoform-bootstrap-ui?branch=master)

[![NPM](https://nodei.co/npm/redux-autoform-bootstrap-ui.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/redux-autoform-bootstrap-ui/) [![NPM](https://nodei.co/npm-dl/redux-autoform-bootstrap-ui.png?months=9&height=3)](https://nodei.co/npm/redux-autoform-bootstrap-ui/)

Bootstrap UI for [redux-autoform](https://github.com/redux-autoform/redux-autoform)

> Be patient. This documentation is still under construction. Pull-requests are welcome.

Components
---

###TextBox###


Specific metadata for the `TextBox` component. Common metadata is not listed.

Metadata | Description
--- | ---
placeholder | The text that should be displayed as a hint when there's no value.
addonBefore | The text that should be added-on before the component.
addonAfter | The text that should be added-on after the component.

[TextBox demo](http://gearz-lab.github.io/redux-autoform/demo.html?preset=componentsTextBox)

###TextArea
---

Specific metadata for the `TextBox` component. Common metadata is not listed.

Metadata | Description
--- | ---
placeholder | The text that should be displayed as a hint when there's no value.
addonBefore | The text that should be added-on before the component.
addonAfter | The text that should be added-on after the component.
rows | The number of rows.

[TextArea demo](http://gearz-lab.github.io/redux-autoform/demo.html?preset=componentsTextArea)

###CheckBox
---

[Checkbox demo](http://gearz-lab.github.io/redux-autoform/demo.html?preset=componentsCheckbox).

###Select
---

Specific metadata for the `Select` component. Common metadata is not listed.

Metadata | Description
--- | ---
options | The options to display. Options are an array of objects with two properties: **value**: The actual value that is stored in the model. **text**: What is displayed to the user

[Select demo](http://gearz-lab.github.io/redux-autoform/demo.html?preset=componentsSelect).

###Lookup
---

Specific metadata for the `Lookup` component. Common metadata is not listed.

Metadata | Description
--- | ---
options | The options to display. Options are an array of objects with two properties: **value**: The actual value that is stored in the model. **text**: What is displayed to the user

[Lookup demo](http://gearz-lab.github.io/redux-autoform/demo.html?preset=componentsLookup).

###DateTimePicker
---

###Specific metadata for the `DateTimePicker` component. Common metadata is not listed.

Metadata | Description
--- | ---
format | Any format supported by [Moment.js](http://momentjs.com/docs/#/parsing/string-format/). Defaults to your locale configuration. Make sure you have it properly configured.  


[DateTimePicker demo](http://gearz-lab.github.io/redux-autoform/demo.html?preset=componentsDateTimePicker).


##Third party


The `DefaultComponentFactory` relies on third-party components. Here's the list:

 - [redux-form](https://github.com/erikras/redux-form/).
 - [react-bootstrap](http://react-bootstrap.github.io/).
 - [react-select](https://github.com/JedWatson/react-select).
 - [react-widgets](https://github.com/jquense/react-widgets).
