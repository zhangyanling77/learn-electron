const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

let win;
// 创建窗口
function create() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 允许使用node相关
    }
  });
  
  if (isDev) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadFile(path.resolve(__dirname, '../../renderer/pages/main/index.html'))
  }
};
// 接收信息
function send(channel, ...args) {
  win.webContents.send(channel, ...args);
};

module.exports = {
  create,
  send
}
