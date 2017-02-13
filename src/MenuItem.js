const React = require('react');

const TYPES = {
    NORMAL:    'normal',
    RADIO:     'radio',
    CHECKBOX:  'checkbox',
    SEPARATOR: 'separator',
    SUBMENU:   'submenu'
};

/**
 * Component to render a menu item.
 * @type {ReactClass}
 */
class MenuItem extends React.Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <menu-item {...props}>{children}</menu-item>
        );
    }
}

MenuItem.propTypes = {
    label:       React.PropTypes.string,
    role:        React.PropTypes.string,
    type:        React.PropTypes.string,
    accelerator: React.PropTypes.string,
    icon:        React.PropTypes.string,
    checked:     React.PropTypes.bool,
    enabled:     React.PropTypes.bool,
    onClick:     React.PropTypes.func,
    children:    React.PropTypes.node
};

MenuItem.contextTypes = {
    electron: React.PropTypes.object.isRequired
};

module.exports = MenuItem;
module.exports.TYPES = TYPES;
module.exports.Separator = () => <MenuItem type={TYPES.SEPARATOR} />;
