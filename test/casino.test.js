const assert = require('assert');
const ganache= require("ganache-cli");
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledfactory = require("../ethereum/build/CasinoFactory.json");
const compiledCasino = require("../ethereum/build/Casino.json");

let accounts;
let factory;
let game;
let gameAddress;

beforeEach( async () => {
   accounts = await  web3.eth.getAccounts();
   
 factory = await new web3.eth.Contract(JSON.parse(compiledfactory.interface))
   .deploy({data: compiledfactory.bytecode})
   .send({from:accounts[0], gas:'6000000'});


  // await factory.methods.createGame('10','3').send({
    //from :accounts[0],
   // gas:'6800000'
  // });
   //[gameAddress] = await factory.methods.getDeployedGames().call();

  // game = await new web3.eth.Contract(
    //JSON.parse(compiledCasino.interface), gameAddress);

   });




describe("Casino ", () =>{
    it("deploys a contract", () =>{
        assert.ok(factory.options.address);
       // assert.ok(game.options.address);
    });
});