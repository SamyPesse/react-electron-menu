const React = require('react');
const MenuItem = require('./MenuItem');

/**
 * Default file menu for the application.
 * @type {ReactClass}
 */
const DefaultFileMenu = React.createClass({
    propTypes: {
        appName:  React.PropTypes.string.isRequired,
        onAbout:  React.PropTypes.func.isRequired,
        children: React.PropTypes.node
    },

    contextTypes: {
        electron: React.PropTypes.object.isRequired
    },

    onHide() {
        const { electron } = this.context;
        electron.remote.getCurrentWindow().hide();
    },

    render() {
        const { appName, children, onAbout } = this.props;
        const { electron } = this.context;
        const os = electron.remote.require('os');
        const isMac = (os.platform() == 'darwin');

        return (
            <MenuItem id="file" label={appName}>
                <MenuItem
                    label={`About ${appName}`}
                    selector="orderFrontStandardAboutPanel"
                    onClick={onAbout}
                    role="about"
                    />
                {children}
                <MenuItem role="toggledevtools" />
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem label="Services" submenu={[]} /> : null}
                {isMac ? <MenuItem
                    label={`Hide ${appName}`}
                    accelerator="CmdOrCtrl"
                    onClick={this.onHide}
                    /> : null}
                {isMac ? <MenuItem
                    label="Hide Others"
                    accelerator="CmdOrCtrl+Shift+H"
                    selector="hideOtherApplications"
                    /> : null}
                {isMac ? <MenuItem
                    label="Show All"
                    selector="unhideAllApplications"
                    /> : null}
                {isMac ? <MenuItem.Separator /> : null}
                <MenuItem role="quit" />
            </MenuItem>
        );
    }
});

module.exports = DefaultFileMenu;
