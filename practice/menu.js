const { Menu, BrowserWindow } = require('electron');

const template = [
  {
    label: '四季',
    submenu: [
      {
        label: '春天',
        accelerator: `ctrl+s`,
        click: () => {
          let win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
              nodeIntegration: true,
            }
          });
          win.loadFile('red.html');
          win.on('closed', () => {
            win = null;
          })
        }
      },
      {
        label: '夏天',
      },
      {
        label: '秋天',
      },
      {
        label: '冬天',
      }
    ]
  },
  {
    label: '白昼',
    submenu: [
      {
        label: '白天',
      },
      {
        label: '黑夜',
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
