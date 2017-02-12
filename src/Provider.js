const React = require('react');

const FAKE_ELECTRON = {
    remote: {
        Menu: () => ({ items: [] }),
        MenuItem: () => ({}),
        getCurrentWindow: () => null
    }
};

/**
 * Provide electron API to children so that this module
 * can also work in web application.
 *
 * @type {ReactClass}
 */
class Provider extends React.Component {
    getChildContext() {
        const { electron } = this.props;

        return {
            electron
        };
    },

    render() {
        const { children } = this.props;
        return React.Children.only(children);
    }
}

Provider.propTypes = {
    children: React.PropTypes.node.isRequired,
    electron: React.PropTypes.object.isRequired
};

Provider.defaultProps = {
    electron: FAKE_ELECTRON
};

Provider.childContextTypes = {
    Menu:     React.PropTypes.func,
    MenuItem: React.PropTypes.func
};

module.exports = Provider;
