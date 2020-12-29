const { ipcMain } = require('electron');
const { send: sendMainWindow } = require('./windows/main'); // 向主窗口发送消息
const { create: createControlWindow } = require('./windows/control'); // 创建新的窗口

module.exports = function() {
  // 主进程响应login
  ipcMain.handle('login', async () => {
    // mock，返回一个code
    let code = Math.floor(Math.random()*(999999 - 100000)) + 100000;
    // console.log('login data: ', code)
    return code;
  });
  ipcMain.on('control', async (e, remoteCode) => {
    // 此处与服务端交互，这里mock返回
    sendMainWindow('control-state-change', remoteCode, 1);
    createControlWindow();
  })
}
