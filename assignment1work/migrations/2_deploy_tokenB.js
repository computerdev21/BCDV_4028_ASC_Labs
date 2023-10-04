const TokenB = artifacts.require("TokenB");

module.exports = async function (deployer) {
    await deployer.deploy(TokenB, { overwrite: false });
};