require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stock rifle noble huge grace pave army gate'; 
let testAccounts = [
"0x9cd575c8e5851d90e5ae3fbfed73a6c849ac665db1c2dd3498886970b1b24317",
"0x0c7e24a702befaa9f3d3faa2d23f83668fe8ed694432e1e70bcc502a770259dc",
"0xcbf9942560815d61d241eeb4aebe2e455cf0689fb7f4005add6da0ae702f5cee",
"0xf689de8280aef6fb4581d83095bc02ec994e7fc878c018a12d7e2c2e35d3b34a",
"0xe47cf380cbed48dd688adaf8784116674ef8f1dab2d38ea3a940ff6054bd2e0b",
"0xd9f6653456addcf4eaa17559c6e659a9e8096153b72bc7fe7a9ac47f95e50868",
"0x79698d5f4f6562d53958d6b993e63361886757c64aca086ec0ae397df827d2fd",
"0xd72056bfba4bb9753823864de7fe22414f686c64259bcd4063c2c7e22bab7927",
"0xbe0493705e28a6827702c1e6873fdbd9665f884272cd60ad9b629e7792f01880",
"0x26e3ebeda0e620ccc1ae92160d416181ed209bfe80d46431c40a9a922d488afd"
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
