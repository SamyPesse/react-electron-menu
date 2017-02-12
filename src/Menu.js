const React = require('react');
const MenuItem = require('./MenuItem');
const { renderToMenu } = require('./render');

/**
 * Component to render a menu.
 * @type {ReactClass}
 */
class Menu extends React.Component {

    /**
     * Get current menu.
     */
    getMenu() {
        const { electron } = this.context;
        const { children } = this.props;
        this.menu = renderToMenu(children, electron);

        return this.menu;
    }

    render() {
        const { children } = this.props;

        return (
            <div className="Electron-Menu">
                {children}
            </div>
        );
    }
}

Menu.propTypes = {
    children: React.PropTypes.node.isRequired
};

Menu.contextTypes = {
    electron: React.PropTypes.object.isRequired
};

module.exports = Menu;
