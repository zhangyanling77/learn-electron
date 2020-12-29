const { app } = require('electron');
const { create: createMainWindow } = require('./windows/main'); // 创建一个主窗口
const handleIPC = require('./ipc'); // 处理主进程的事务

app.on('ready', () => {
  handleIPC();
  createMainWindow(); // 主窗口渲染App.js的页面内容
})
