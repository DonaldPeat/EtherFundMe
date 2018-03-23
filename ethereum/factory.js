import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // '0x6a42c323f0eD9a4dEdBc51F6f99D74b71d97fdE7'
  // '0x7D2BFe8598d492fC8F10E1503F1c76e082A9F974'
  // '0xB4c3c00d09489e71C7D7023ce8A9D661417CD6Ae'
  '0x43c125bd57b8C73A87B6D2DFb225687f78fF794A'
);

export default instance;
