const { desktopCapturer } = require('electron');

const video = document.getElementById('screen-video');

function play(stream) {
  video.srcObject = stream;
  video.onloadedmetadata = () => video.play();
}
// 获取屏幕信息
function getScreenStream() {
  return new Promise((_resolve, _reject) => { // 对视频音频进行条件约束
    desktopCapturer.getSources({
      types: ['window', 'screen']
    })
    .then(async sources => {
      console.log(sources)
      for (const source of sources) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: source.id,
                maxWidth: source.width,
                maxHeight: source.height,
              }
            }
          });
          play(stream);
        } catch (err) {
          console.error(err)
        }
      }
    })
  })
}

getScreenStream();
