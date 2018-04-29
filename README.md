# EtherFunded

EtherFunded is an Ethereum dApp which allows users to create, contribute, and actively participate in a new or ongoing project using MetaMask. Campaign creators set the minumum contribution and deploy a campaign contract. When funding is required by the campaign manager to fund a particular part of the project, a request is created to release contribution funds. The funds are released to a specified address after a majority of contributors approve the request.

## Getting Started

### Dependencies

npm & node (9.4.0^) https://docs.npmjs.com/getting-started/installing-node - install & run

MetaMask https://metamask.io/ - browser extension to interact with Ethereum dApps

### Installing

Install modules (must have node v9.4.0^)

`npm install` 

## Running the tests

run mocha smart contract tests

`npm run test`

## Compiling & deploying the parent contract

Compile the campaign factory smart contract

`node compile.js #replaces contents of build directory`

Deploy the campaign factory contract

`node deploy.js`

After successful deployment, you will see the contract address

`"Contract deployed to 0x7D2BFe8598d492fC8F10E1503F1c76e082A9F974"`

This is the new contract address and should replace the instance address in factory.js:

`const instance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface), '0x7D2BFe8598d492fC8F10E1503F1c76e082A9F974' );`

## Deploying application

Run development `npm run dev`

Production build `npm run build`

Serve prod build `npm run start`


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
