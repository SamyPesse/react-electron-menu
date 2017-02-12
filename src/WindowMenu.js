const Menu = require('./Menu');

/**
 * Menu that only render for current window.
 * @type {ReactClass}
 */
class WindowMenu extends Menu {
    constructor(props, context) {
        super(props);
        const { electron } = context;

        const win = electron.remote.getCurrentWindow();

        if (!win) {
            return;
        }

        win.on('focus', () => {
            electron.remote.Menu.setApplicationMenu(this.menu);
        });

        win.on('blur', () => {
            const currentMenu = electron.remote.Menu.getApplicationMenu();
            if (currentMenu == this.menu) {
                electron.remote.Menu.setApplicationMenu(null);
            }
        });
    }
}

module.exports = WindowMenu;
