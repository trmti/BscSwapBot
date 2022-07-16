const ethers = require('ethers');
/*
  myWallet: 自分のウォレットアドレス
  tokenA: スワップ元のトークン
  tokenB: スワップ先のトークン
*/
module.exports.addresses = {
  myWallet: '0x000...', // 自分のWalletアドレス
  tokenA: '0x000...', // DPET
  tokenB: '0x000...', // WBNB
};

module.exports.secretKey = '12345....'; // 秘密鍵

module.exports.gasPrice = ethers.utils.parseUnits('5', 'gwei').toString();
