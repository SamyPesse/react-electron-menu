const React = require('react');

function resolveCompositeElement(el) {
    if (typeof el.type === 'function') {
        return resolveCompositeElement(new el.type(el.props));
    }
    return el;
}

/**
 * Render a set of react children to a menu
 * @param  {ReactChildren} children
 * @param  {Object} electron
 * @return {Menu} menu?
 */
function renderToMenu(children, electron) {
    const { Menu } = electron.remote;
    const template =  renderToMenuTemplate(children, electron) || [];

    return Menu.buildFromTemplate(template);
}

/**
 * Render a react element to a menu item.
 * @param  {ReactElement} el
 * @param  {Object} electron
 * @return {MenuItem} menuItem
 */
function renderToMenuItemTemplate(el) {
    if (!el) {
        return null;
    }

    el = resolveCompositeElement(el);
    const { children, ...itemProps } = el.props;
    const submenu = renderToMenuTemplate(children);

    itemProps.click = itemProps.onClick;
    delete itemProps.onClick;

    return {
        ...itemProps,
        submenu
    };
}

/**
 * Render a set of react children to an array of menu items
 * @param  {ReactChildren} children
 * @param  {Object} electron
 * @return {Array<MenuItem>} menu
 */
function renderToMenuTemplate(children) {
    const items =  (React.Children
        .map(children, el => renderToMenuItemTemplate(el)) || [])
        .filter(x => Boolean(x));

    if (items.length == 0) {
        return undefined;
    }

    return items;
}

module.exports = {
    renderToMenu
};
