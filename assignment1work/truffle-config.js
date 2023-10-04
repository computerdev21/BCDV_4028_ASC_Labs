// truffle-config.js
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic ='lend fly moon transfer food room chimney police maid swarm table illegal'; // replace with your own mnemonic

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7546,
      network_id: '*', // Match any network id
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc-mumbai.maticvigil.com/'),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  // Other configurations...
};
