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

    componentWillUnmount() {
        const { electron } = this.context;
        const win = electron.remote.getCurrentWindow();

        if (win) {
            this.clearListeners(win);
            if (win.isFocused()) this.onBlur();
        }
    }

    /**
     * Clear listener for a window.
     * @param {Window} win
     */
    clearListeners(win) {
        win.removeListener('focus', this.onFocus);
        win.removeListener('blur', this.onBlur);
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

        this.clearListeners(win);

        win.on('focus', this.onFocus);
        win.on('blur', this.onBlur);

        if (win.isFocused() || document.hasFocus()) {
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

        if (currentMenu == this.menu) {
            electron.remote.Menu.setApplicationMenu(null);
        }
    }
}

WindowMenu.contextTypes = Menu.contextTypes;

module.exports = WindowMenu;
