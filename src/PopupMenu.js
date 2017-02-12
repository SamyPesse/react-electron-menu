const React = require('react');
const Menu = require('./Menu');

/**
 * Menu shown at a specific position.
 * @type {ReactClass}
 */
class PopupMenu extends Menu {
    componentDidMount() {
        this.onMenuUpdated();
    }

    componentDidUpdate() {
        this.onMenuUpdated();
    }

    componentWillUnmount() {

    }

    onMenuUpdated() {
        const { x, y } = this.props;
        const { electron } = this.context;
        const win = electron.remote.getCurrentWindow();

        if (!win) {
            return;
        }

        const menu = this.getMenu();
        menu.popup(win, x, y);
    }
}

PopupMenu.propTypes = {
    ...Menu.propTypes,
    x: React.PropTypes.number,
    y: React.PropTypes.number
};
PopupMenu.contextTypes = Menu.contextTypes;

module.exports = PopupMenu;
