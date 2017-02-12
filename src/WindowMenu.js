const Menu = require('./Menu');

/**
 * Menu that only render for current window.
 * @type {ReactClass}
 */
class WindowMenu extends Menu {
    constructor(props, context) {
        super(props, context);

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentDidMount() {
        this.onMenuUpdated();
    }

    componentDidUpdate() {
        this.onMenuUpdated();
    }

    /**
     * Update the menu for the window.
     */
    onMenuUpdated() {
        const { electron } = this.context;
        const win = electron.remote.getCurrentWindow();

        if (!win) {
            return;
        }

        win.removeListener('focus', this.onFocus);
        win.removeListener('blur', this.onBlur);

        win.on('focus', this.onFocus);
        win.on('blur', this.onBlur);

        if (win.isFocused()) {
            this.onFocus();
        }
    }

    /**
     * When window is focused.
     */
    onFocus() {
        const { electron } = this.context;
        const menu = this.getMenu();

        electron.remote.Menu.setApplicationMenu(menu);
    }

    /**
     * When window is focused.
     */
    onBlur() {
        const { electron } = this.context;
        const currentMenu = electron.remote.Menu.getApplicationMenu();

        electron.remote.Menu.setApplicationMenu(null);
    }
}

WindowMenu.contextTypes = Menu.contextTypes;

module.exports = WindowMenu;
