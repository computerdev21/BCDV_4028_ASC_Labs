
const BridgeA = artifacts.require("BridgeA");
const TokenA = artifacts.require("TokenA");

module.exports = async function (deployer) {
    await deployer.deploy(TokenA, { overwrite: false });

    const tokenAInstance = await TokenA.deployed();
    await deployer.deploy(BridgeA, tokenAInstance.address, 0x2CF3Cd78ab0071E9AFeeaBcd03ed6645813b81e8);
};