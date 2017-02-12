const React = require('react');

const TYPES = {
    SEPARATOR: 'separator'
};

/**
 * Component to render a menu item.
 * @type {ReactClass}
 */
class MenuItem extends React.Component {
    constructor(props, context) {
        super(props);
        const { electron } = context;

        this.menuItem = new electron.remote.MenuItem();
    }

    render() {
        return (
            <div className="Electron-MenuItem">

            </div>
        );
    }
}

MenuItem.propTypes = {
    label:    React.PropTypes.string,
    role:     React.PropTypes.string,
    type:     React.PropTypes.string,
    onClick:  React.PropTypes.func,
    children: React.PropTypes.node
};

MenuItem.contextTypes = {
    electron: React.PropTypes.object.isRequired
};

module.exports = MenuItem;
module.exports.TYPES = TYPES;
module.exports.Separator = () => <MenuItem type={TYPES.SEPARATOR} />;
