/*
    The method of using react-test-renderer is really bad,
    but I don't know another one.
 */
const React = require('react');
const ReactTestRenderer = require('react-test-renderer');
const Provider = require('./Provider');

/**
 * Render a set of react children to a menu
 * @param  {ReactElement} el
 * @param  {Object} electron
 * @return {Menu} menu?
 */
function renderToMenu(el, electron) {
    const { Menu } = electron.remote;

    const renderer = ReactTestRenderer.create(
        <Provider electron={electron}>
            {el}
        </Provider>
    );
    const json = renderer.toJSON();

    const children = json.children;
    const template =  jsonToMenu(children);

    console.log('template', template);

    return Menu.buildFromTemplate(template);
}

/**
 * Convert an array of json from ReactTestRenderer into a menu template
 * @param {JSON} json
 * @return {Object} menuItem?
 */
function jsonToMenu(json) {
    return json
        .map(o => jsonToMenuItem(o))
        .filter(o => Boolean(o));
}

/**
 * Convert a json from ReactTestRenderer into a menu item template.
 * @param {JSON} json
 * @return {Object} menuItem?
 */
function jsonToMenuItem(json) {
    if (json.type != 'menu-item') {
        return null;
    }

    const item = json.props;

    item.click = item.onClick;
    delete item.onClick;

    item.submenu = item.submenu || (json.children ? jsonToMenu(json.children) : undefined);

    return item;
}

module.exports = {
    renderToMenu
};
