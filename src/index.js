const MenuItem = require('./MenuItem');
const WindowMenu = require('./WindowMenu');
const PopupMenu = require('./PopupMenu');
const Provider = require('./Provider');
const DefaultFileMenu = require('./DefaultFileMenu');
const DefaultEditMenu = require('./DefaultEditMenu');

module.exports = {
    Provider,
    MenuItem,
    // Menu types
    WindowMenu,
    PopupMenu,
    // Default menus
    DefaultFileMenu,
    DefaultEditMenu
};
