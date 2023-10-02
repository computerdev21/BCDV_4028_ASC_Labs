const TokenA = artifacts.require("TokenA");
const TokenB = artifacts.require("TokenB");
const BridgeA = artifacts.require("BridgeA");
const BridgeB = artifacts.require("BridgeB");


module.exports = function (deployer) {
    deployer.deploy(TokenA);
    deployer.deploy(TokenB);

    deployer.deploy(BridgeA, TokenA.address, "address_of_bridge_b");
    deployer.deploy(BridgeB, TokenB.address, "address_of_bridge_a");
};