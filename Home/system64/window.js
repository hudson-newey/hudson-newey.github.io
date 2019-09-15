const { app, BrowserWindow, globalShortcut } = require('electron')
var urls = [
    "http://localhost:8080"
]


const createWindow = () =>{
    win = new BrowserWindow({
        center: true,
        fullscreen: true,
        alwaysOnTop: true,
        title: 'Grathium UI',
	icon: __dirname + '/favicon.png',
        webPreferences:{
          plugins: true,
          nodeIntegration: false,
          show: false
        }
    });

    win.removeMenu();
    win.maximize();
    console.log(urls[0]);

    win.loadURL(urls[0]);
    win.once('ready-to-show',()=>{
        win.show()
    });

    win.on('closed',()=>{
        win = null;
    });
}

function createGlobalShortcut() {
    const homekey = "CommandOrControl+H";
    globalShortcut.register(homekey, () => {
        win.loadURL(urls[0]);
    });

    console.log(
        "Homepage Set to: " + homekey,
        globalShortcut.isRegistered(homekey)
    );
}

let win = null;
app.on("ready", () => {
    createWindow();
    createGlobalShortcut();
});
