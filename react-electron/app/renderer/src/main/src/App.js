import React, { useState, useEffect } from 'react';
import './App.css';
const { ipcRenderer } = require('electron');


const App = () => {
  const [remoteCode, setRemoteCode] = useState(''); // 控制的控制码
  const [localCode, setLocalCode] = useState(''); // 本身的控制码
  const [controlText, setControlText] = useState(''); // 控制码的文案

  const login = async () => {
    // 登录状态在主进程维护，通过主进程处理ipc事件
    const code = await ipcRenderer.invoke('login');
    if (code) setLocalCode(code); // 本身控制码重新赋值
  };

  const handleControlState = (e, name, type) => {
    let text = '';
    if (type === 1) {
      // 控制别人
      text = `正在远程控制${name}`;
    } else if (type === 2) {
      // 被别人控制
      text = `被${name}控制`;
    }
    setControlText(text);
  };

  useEffect(() => {
    login();
    ipcRenderer.on('control-state-change', handleControlState); // 监听ipc事件，从主进程传过来，说明控制状态的变化
    return () => {
      // 监听函数之后，最好清理掉这个函数
      ipcRenderer.removeListener('control-state-change', handleControlState);
    }
  }, []);
  // 发起一个请求，想要控制控制码对应的用户
  const startControl = remoteCode => {
    ipcRenderer.send('control', remoteCode);
  };

  return (
    <div className="App">
      {
        controlText === '' ? (
          <>
            <div>你的控制码 {localCode}</div>
            <input type="text" value={remoteCode} onChange={e => setRemoteCode(e.target.value)} />
            <button onClick={() => startControl(remoteCode)}>确认</button>
          </>
        ) : (
          <div>{controlText}</div>
        )
      }
    </div>
  )
};

export default App;
