const BridgeA = artifacts.require("BridgeA");
const TokenA = artifacts.require("TokenA");

contract("BridgeA", (accounts) => {
    it("should deposit and withdraw tokens", async () => {
        const tokenAInstance = await TokenA.new();
        const bridgeAInstance = await BridgeA.new(tokenAInstance.address, "address_of_bridge_b");

        const depositAmount = web3.utils.toWei("1", "ether");
        const withdrawAmount = web3.utils.toWei("0.5", "ether");

        // Deposit tokens
        await tokenAInstance.approve(bridgeAInstance.address, depositAmount, { from: accounts[0] });
        await bridgeAInstance.deposit(depositAmount, { from: accounts[0] });

        // Withdraw tokens
        await bridgeAInstance.withdraw(withdrawAmount, { from: accounts[0] });

        const balance = await tokenAInstance.balanceOf(accounts[0]);
        assert.strictEqual(balance.toString(), withdrawAmount, "Balance is not correct after withdrawal");
    });
});