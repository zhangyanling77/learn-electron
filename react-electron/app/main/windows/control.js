const path = require('path');
const { BrowserWindow } = require('electron');

let win;
function create () {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile(path.resolve(__dirname,"../../renderer/pages/control/index.html"));
}

module.exports = {
  create
}
