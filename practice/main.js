const { app, BrowserWindow, BrowserView } = require('electron');

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
  mainWindow.loadFile('index.html');
  // 嵌入网页
  const viewWindow = new BrowserView();
  mainWindow.setBrowserView(viewWindow);
  viewWindow.setBounds({
    x: 0,
    y: 150,
    width: 600,
    height: 600,
  });
  viewWindow.webContents.loadURL('https://www.baidu.com');
  

  mainWindow.on('close', () => {
    mainWindow = null;
  });
});
