/*
    This configuration file is used when the application is deployed in a server (such as Heroku). The variables must be added in the server to allow the application read them on starting up. 
*/

const CONF = {
    address: '0xCFb940e8b66BC4Afa664Dbe4C8579608af74a764',
    infuraKey: process.env.INFURA_KEY,
    addressPhrase: 'Not needed in prod',
    buildFolder: 'Not needed in prod',
    explorerUrl: 'https://rinkeby.etherscan.io/address/',
    gasLimitToDeploy: 'Not needed in prod'
};
CONF.infuraUrl = `https://rinkeby.infura.io/${CONF.infuraKey}`;
CONF.contractExplorerUrl = CONF.explorerUrl + CONF.address;
module.exports = CONF;