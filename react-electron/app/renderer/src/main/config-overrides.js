const { override } = require('customize-cra');

function addRenderer(config) {
  config.target = 'electron-renderer';
  return config;
}

module.exports = override(addRenderer);
