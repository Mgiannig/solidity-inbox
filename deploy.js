const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'target sphere bitter ghost festival please loud output chair faith clean injury', 'https://rinkeby.infura.io/v3/7e44ea6c4a224e0fb3a36fb39367ce8agitt"'
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', account[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);

};

deploy();