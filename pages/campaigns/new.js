import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    campaignTitle: '',
    campaignDescription: '',
    approvalThreshold: 1,
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(
          this.state.minimumContribution,
          this.state.campaignTitle,
          this.state.campaignDescription,
          this.state.approvalThreshold
        )
        .send({
          //MetaMask will auto calculate gas necessary to send transaction
          from: accounts[0]
        });
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message.split('\n')[0] });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Title</label>
            <Input
              placeholder="optional"
              labelPosition="right"
              value={this.state.campaignTitle}
              onChange={event =>
                this.setState({ campaignTitle: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Input
              placeholder="optional"
              labelPosition="right"
              value={this.state.campaignDescription}
              onChange={event =>
                this.setState({ campaignDescription: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Approval Threshold</label>
            <Input
              placeholder="optional"
              labelPosition="right"
              value={this.state.approvalThreshold}
              onChange={event =>
                this.setState({ approvalThreshold: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create Campaign
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
