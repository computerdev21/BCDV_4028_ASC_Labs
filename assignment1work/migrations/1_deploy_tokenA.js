const TokenA = artifacts.require("TokenA");

module.exports = async function (deployer) {
    await deployer.deploy(TokenA, { overwrite: false });
};