const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 允许使用node相关的
    }
  });
  if (isDev) {
    win.loadURL('http://localhost:3000'); // 加载页面
  } else {
    win.loadFile(path.resolve(__dirname, '../renderer/pages/control/index.html'));
  }
})