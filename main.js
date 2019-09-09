const { app, BrowserWindow } = require('electron')
const urls = [
    "http://localhost:8080"
]

const createWindow = () =>{
    win = new BrowserWindow({
        center: true,
        width: 800,
        height: 600,
        fullscreen: true,
        webPreferences:{
            nodeIntegration: false,
            show: false
        }
    });
    win.maximize();
    //win.webContents.
    console.log(urls[0]);

    win.loadURL(urls[0]);
    win.once('ready-to-show',()=>{
        win.show()
    });

    win.on('closed',()=>{
        win = null;
    });
}

app.on('ready', createWindow);
