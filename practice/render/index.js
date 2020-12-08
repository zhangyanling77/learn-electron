/*
const BrowserWindow = require('electron').remote.BrowserWindow;
// const fs = require('fs');
const btn = document.querySelector('#btn');
// const food = document.querySelector('#food');

window.onload= function() {
  btn.onclick = function() {
    // fs.readFile('food.txt', (_err, data) => {
    //   food.innerHTML = data;
    // });
    let newWin = new BrowserWindow({
      width: 500,
      height: 500,
    });
    newWin.loadFile('red.html');
    newWin.on('close', () => {
      newWin = null;
    });
  }
}
*/

/*
const { remote } = require('electron');
const rightTemplate = [
  {
    label: '粘贴',
  },
  {
    label: '复制',
  }
];
const menu = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.popup({
    window: remote.getCurrentWindow(),
  });
}, false);
*/

/*
const { shell } = require('electron');

const aHref = document.querySelector('#aHref');

aHref.onclick = function(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  shell.openExternal(href);
}
*/

/*
const btn = document.querySelector('#btn');
btn.onclick = function(e) {
  window.open('https://www.electronjs.org');
}
*/

/*
const { dialog } = require('electron').remote;
const btn = document.querySelector('#btn');

btn.onclick = function() {
  dialog.showOpenDialog({
    title: 'electron',
    // defaultPath: 'header.jpg',
    // 文件选择过滤
    filters: [
      {
        name: 'jpg',
        extensions: ['jpg'],
      }
    ],
    buttonLabel: '确认与否',
    // 对话框使用的功能,允许选择文件/允许多选
    properties: ['openFile', 'multiSelections']
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
}
*/

/*
const { dialog } = require('electron').remote;
const fs = require('fs');
const btn = document.querySelector('#btn');

btn.onclick = function() {
  dialog.showSaveDialog({
    title: 'electron',
  }).then(res => {
    console.log(res);
    fs.writeFileSync(res.filePath, 'hello world')
  }).catch(err => {
    console.log(err);
  })
}
*/

/*
const { dialog } = require('electron').remote;
const btn = document.querySelector('#btn');

btn.onclick = function() {
  dialog.showMessageBox({
    type: 'error',
    title: '错误',
    message: '这是错误警告',
    buttons: ['确定', '忽略', '退出']
  }).then(res => {
    console.log(res)
  });
}
*/

/*
window.addEventListener('online', () => {
  alert('网络正常,放心使用')
})

window.addEventListener('offline', () => {
  alert('网络异常,请检查网络是否连接')
})
*/


const { clipboard } = require('electron');
const btn = document.getElementById('btn');
const txt = document.getElementById('txt');
const message = document.getElementById('message');

btn.onclick = () => {
  // 文字复制粘贴
  clipboard.writeText(message.innerHTML, 'msg');
  alert('复制成功！');
  txt.innerText = clipboard.readText('msg');
  // html添加
  // clipboard.writeHTML('<h1>hello world</h1>');
  // txt.innerHTML = clipboard.readHTML();
} 
