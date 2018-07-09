const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const{interface,bytecode}= require('./compile');

const provider = new HDWalletProvider(
  'tackle magnet buzz margin jewel tell liar wish kid ghost develop usual',
  'https://rinkeby.infura.io/TtUrxmqmedKiVhPY77Ve'
);
const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();
  console.log ('attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode,arguments:[10,3]})
  .send({gas: '7000000', from: accounts[0]});

console.log('Contract deployed to ', result.options.address);// this to print out the addres whr our contract is deployed to
};
deploy();
