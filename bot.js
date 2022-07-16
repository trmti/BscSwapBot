const ethers = require('ethers');
const abi = require('./bot.json');
const { swapAllToken } = require('./swap.js');
const { addresses, secretKey } = require('./config.my.js');
bsc_rpc = 'https://bsc-dataseed.binance.org/';
const provider = new ethers.providers.JsonRpcProvider(bsc_rpc, {
  name: 'binance',
  chainId: 56,
});

const wallet = new ethers.Wallet(secretKey);
const account = wallet.connect(provider);

const contract = new ethers.Contract(addresses.tokenA, abi, provider);
const filter = contract.filters.Transfer(null, addresses.myWallet);

contract.on(filter, (args) => {
  console.log('You got New asset!');
  swapAllToken(account, addresses.tokenA, addresses.tokenB);
});
