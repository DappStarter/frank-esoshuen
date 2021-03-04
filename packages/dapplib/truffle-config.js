require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stone rifle saddle home install clock metal gas'; 
let testAccounts = [
"0x3c0b21dde7df36622106661c953f09c4db7ff0373704db2c07aade2ef2c0c987",
"0x675382b16e3b0c8e31baf8559444ab0ba7616e1ab16b72121adbeca22cf5adb4",
"0x70543be4c3a1dd5dd4bfcc78c38a78fd1230bca8f94c8991726243581e9ee6c1",
"0x6e0e8f9347499b4e3563714778c242628cc6211229558a7ac13f0a7867d6411c",
"0xa4ff3551db7cce7eeb796d8e8c41e64e441411584135d62b21cf9264c4bc0ede",
"0xb2b764b2e584f8a345e14e3fed5989a48a6d1254e68db59c9b9991073900e686",
"0x7dd28133d544b517bf5ffa0ca58fccf6b34b4a507f7b4418c82d090a893781f4",
"0x06ba5a4dd76d4b098be7de1c894ef0b09fd1b71572b2d0f9e6b4353aff394192",
"0x6ed1f345447c4c1e9a3f53bb4b86d4028bf96857137a249daeaa4e4839e8e617",
"0xea370d9fd37bbc515b66fd2fcfa702171b80ad33b8e993449d01e5f951305fc5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
