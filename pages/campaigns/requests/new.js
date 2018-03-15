import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async e => {
    e.preventDefault();

    const campaign = Campaign(this.props.address);

    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });
    } catch (err) {}
  };

  render() {
    return (
      <Layout>
        <h3>Create A Request</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Value (Ether)</label>
            <Input
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={e => this.setState({ recipient: e.target.value })}
            />
          </Form.Field>

          <Button primary loading={this.state.loading}>
            Create Request!{' '}
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
