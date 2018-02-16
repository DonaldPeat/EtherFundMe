import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // if in browser and metamask is running, use web3 instance injected by MetaMask
  web3 = new Web3(window.web3.currentProvider);
} else {
  //If we are on the server OR  user is not running MetaMask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/7ditWm4ERZ7g8lV6fTxr'
  );
  web3 = new Web3(provider);
}

export default web3;
