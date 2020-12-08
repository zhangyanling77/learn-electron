const { app, BrowserWindow, BrowserView, globalShortcut } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  });
  // require('./menu');
  // mainWindow.webContents.openDevTools(); // 打开控制台
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; // 消除控制台上报警文字

  // 快捷键ctrl+y打开网址
  // globalShortcut.register('ctrl+y', () => {
  //   // 当快捷键已经被其他应用注册时，此调用将返回false
  //   const isRegister = globalShortcut.isRegistered('ctrl+y');
  //   if (isRegister) {
  //     mainWindow.loadURL('https://www.baidu.com');
  //   } else {
  //     console.log('该快捷键已被注册！')
  //   }
  // });
  // 快捷键ctrl+z可以打开页面
  // globalShortcut.register('ctrl+z', () => {
  //   mainWindow.loadFile('./index.html');
  // })

  mainWindow.loadFile('index.html');
  // 嵌入网页
  // const viewWindow = new BrowserView();
  // mainWindow.setBrowserView(viewWindow);
  // viewWindow.setBounds({
  //   x: 0,
  //   y: 150,
  //   width: 600,
  //   height: 600,
  // });
  // viewWindow.webContents.loadURL('https://www.baidu.com');


  mainWindow.on('close', () => {
    // 注销快捷键
    // globalShortcut.unregister('ctrl+y');
    // globalShortcut.unregister('ctrl+z');

    mainWindow = null;
  });
});
