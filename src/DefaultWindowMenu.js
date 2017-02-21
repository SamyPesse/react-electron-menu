const React = require('react');
const MenuItem = require('./MenuItem');

/**
 * Default window menu to control the window.
 * @type {ReactClass}
 */
const DefaultWindowMenu = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    contextTypes: {
        electron: React.PropTypes.object.isRequired
    },

    render() {
        const { children } = this.props;
        const { electron } = this.context;
        const os = electron.remote.require('os');
        const isMac = (os.platform() == 'darwin');

        return (
            <MenuItem role="window">
                <MenuItem role="minimize" />
                {children}
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem role="front" /> : null}
            </MenuItem>
        );
    }
});

module.exports = DefaultWindowMenu;
