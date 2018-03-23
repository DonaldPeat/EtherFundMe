'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // if in browser and metamask is running, use web3 instance injected by MetaMask
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //If we are on the server OR  user is not running MetaMask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/7ditWm4ERZ7g8lV6fTxr');
  web3 = new _web2.default(provider);
}

exports.default = web3;