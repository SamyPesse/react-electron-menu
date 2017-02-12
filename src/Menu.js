const React = require('react');
const { renderToMenu } = require('./render');

/**
 * Component to render a menu.
 * @type {ReactClass}
 */
class Menu extends React.Component {

    /**
     * Get current menu.
     * @return {Menu}
     */
    getMenu() {
        const { electron } = this.context;
        const { children } = this.props;
        this.menu = renderToMenu(children, electron);

        return this.menu;
    }

    render() {
        return (
            null
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
