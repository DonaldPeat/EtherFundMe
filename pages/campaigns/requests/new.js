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
    recipient: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  render() {
    return (
      <Layout>
        <h3>Create A Request</h3>
        <Form>
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
              value={this.state.description}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.description}
              onChange={e => this.setState({ recipient: e.target.value })}
            />
          </Form.Field>

          <Button primary>Create Request! </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
