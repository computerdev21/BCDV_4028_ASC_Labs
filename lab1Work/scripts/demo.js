// scripts/demo.js
const TokenA = artifacts.require("TokenA");
const BridgeA = artifacts.require("BridgeA");

module.exports = async function (callback) {
    try {
        const tokenAInstance = await TokenA.deployed();
        const bridgeAInstance = await BridgeA.deployed();

        const depositAmount = web3.utils.toWei("1", "ether");
        const withdrawAmount = web3.utils.toWei("0.5", "ether");

        // Account 0 deposits tokens
        await tokenAInstance.approve(bridgeAInstance.address, depositAmount);
        await bridgeAInstance.deposit(depositAmount);

        // Account 0 withdraws tokens
        await bridgeAInstance.withdraw(withdrawAmount);

        console.log("Tokens sent and received successfully!");

        callback();
    } catch (error) {
        console.error(error);
        callback(error);
    }
};
