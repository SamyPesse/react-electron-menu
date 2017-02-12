const React = require('react');

/**
 * Component to render a menu.
 * @type {ReactClass}
 */
class Menu extends React.Component {
    constructor(props, context) {
        super(props);
        const { electron } = context;

        this.menu = new electron.remote.Menu();
    }

    render() {
        const { children } = this.props;

        this.menu.items = React.Children.forEach(children, (child) => {
            console.log(child);
            return child.menuItem;
        }) || [];


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
