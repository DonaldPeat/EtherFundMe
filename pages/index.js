import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  //next requires static to call method directly
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  render() {
    return <div> {this.props.campaigns[0]} </div>;
  }
}

export default CampaignIndex;
