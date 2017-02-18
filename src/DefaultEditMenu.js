const React = require('react');
const MenuItem = require('./MenuItem');

/**
 * Default edit menu for the application.
 * @type {ReactClass}
 */
const DefaultEditMenu = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    contextTypes: {
        electron: React.PropTypes.object.isRequired
    },

    render() {
        const { children } = this.props;

        return (
            <MenuItem id="edit" label="Edit">
                <MenuItem role="undo" />
                <MenuItem role="redo" />
                <MenuItem.Separator />
                <MenuItem role="cut" />
                <MenuItem role="copy" />
                <MenuItem role="paste" />
                <MenuItem role="pasteandmatchstyle" />
                <MenuItem role="delete" />
                <MenuItem role="selectall" />
                {children}
            </MenuItem>
        );
    }
});

module.exports = DefaultEditMenu;
