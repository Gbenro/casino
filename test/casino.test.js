const assert = require('assert');
const ganache= require("ganache-cli");
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const casino = require("../ethereum/build/Casino.json");

let accounts;
let casinoAddress;

beforeEach( async () => {
   accounts = await  web3.eth.getAccounts();
   
  casinoAddress = await new web3.eth.Contract(JSON.parse(casino.interface))
   .deploy({data: casino.bytecode,arguments:['10','3']})
   .send({from:accounts[0], gas:'3000000'});
   console.log(casinoAddress);
   
    });




describe("Casino ", () =>{
    it("deploys a contract", () =>{
       // console.log(casino);

    });
});