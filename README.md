# react-electron-menu

[![NPM version](https://badge.fury.io/js/react-electron-menu.svg)](http://badge.fury.io/js/react-electron-menu)
[![Build Status](https://travis-ci.org/SamyPesse/react-electron-menu.png?branch=master)](https://travis-ci.org/SamyPesse/react-electron-menu)

This modules provides a react API to create and manage electron's menus.

### Installation

```
$ npm install react-electron-menu --save
```

### Usage

This module provides 2 types of menu: `WindowMenu` and `PopupMenu`.

##### `WindowMenu`

This menu type is displayed only for the currently focused window.

```js
const React = require('react');
const { render } = require('react-dom');
const { WindowMenu, MenuItem } = require('react-electron-menu');
const electron = require('electron');

render(
    <Provider electron={electron}>
        <WindowMenu>
            <MenuItem label="File">
                <MenuItem label="Open ..." onClick={...} />
            </MenuItem>
        </WindowMenu>
    </Provider>,
    document.body
)
```


##### `PopupMenu`

This menu is shown on screen at `x` and `y`.

```js
const React = require('react');
const { render } = require('react-dom');
const { PopupMenu, MenuItem } = require('react-electron-menu');
const electron = require('electron');

render(
    <Provider electron={electron}>
        <PopupMenu x={200} y={100}>
            <MenuItem label="Open ..." onClick={...} />
        </PopupMenu>
    </Provider>,
    document.body
)
```

##### Default Menus

This module also provides helper to replicate default system's menus:

```js
const { DefaultEditMenu, DefaultFileMenu, DefaultWindowMenu, MenuItem } = require('react-electron-menu');

// Menu file (app menu on Mac): includes window controls
<DefaultFileMenu>
    <MenuItem label="Check for updates..." />
</DefaultFileMenu>

// Menu edit: includes undo, redo, cut, copy, paste, select all
<DefaultEditMenu>
    <MenuItem.Separator />
    <MenuItem label="Entry at the bottom" />
</DefaultEditMenu>

// Menu view: includes minimize, close, Bring All to Front
<DefaultWindowMenu>
    <MenuItem.Separator />
    <MenuItem label="Toggle an app view" />
</DefaultWindowMenu>
```
