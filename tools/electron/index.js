const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // Pre load files
        // webPreferences: {
        //     preload: {}
        // }
    });

    mainWindow.loadFile('index.html');
}