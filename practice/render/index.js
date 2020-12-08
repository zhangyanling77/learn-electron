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

const btn = document.querySelector('#btn');
btn.onclick = function(e) {
  window.open('https://www.electronjs.org');
}
