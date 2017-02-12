const React = require('react');
const MenuItem = require('./MenuItem');

/**
 * Default edit menu for the application.
 * @type {ReactClass}
 */
class DefaultEditMenu extends React.Component {

    getWindow() {
        const { electron } = this.context;
        return electron.remote.getCurrentWindow();
    }

    onUndo() {
        this.getWindow().webContents.undo();
    }

    onRedo() {
        this.getWindow().webContents.redo();
    }

    onCut() {
        this.getWindow().webContents.cut();
    }

    onCopy() {
        this.getWindow().webContents.copy();
    }

    onSelectAll() {
        this.getWindow().webContents.selectAll();
    }

    render() {
        const { children } = this.props;

        return (
            <MenuItem>
                <MenuItem
                    label="Undo"
                    accelerator="CmdOrCtrl+Z"
                    onClick={this.onUndo}
                    />
                <MenuItem
                    label="Redo"
                    accelerator="Shift+CmdOrCtrl+Z"
                    onClick={this.onRedo}
                    />
                <MenuItem.Separator />
                <MenuItem
                    label="Cut"
                    accelerator="CmdOrCtrl+X"
                    onClick={this.onCut}
                    />
                <MenuItem
                    label="Copy"
                    accelerator="CmdOrCtrl+C"
                    onClick={this.onCopy}
                    />
                <MenuItem
                    label="Paste"
                    accelerator="CmdOrCtrl+V"
                    onClick={this.onPaste}
                    />
                <MenuItem
                    label="Select All"
                    accelerator="CmdOrCtrl+A"
                    onClick={this.onSelectAll}
                    />
                {children}
            </MenuItem>
        );
    }
}

DefaultEditMenu.propTypes = {
    children: React.PropTypes.node
};

DefaultEditMenu.contextTypes = {
    electron: React.PropTypes.object.isRequired
};

module.exports = DefaultEditMenu;
