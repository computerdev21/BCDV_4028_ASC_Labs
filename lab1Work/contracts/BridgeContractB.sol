// contracts/BridgeB.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BridgeB {
    address public tokenB;
    address public bridgeA;

    constructor(address _tokenB, address _bridgeA) {
        tokenB = _tokenB;
        bridgeA = _bridgeA;
    }

    function deposit(uint256 amount) external {
        IERC20(tokenB).transferFrom(msg.sender, address(this), amount);
        // Implement logic to lock tokens and mint wrapped tokens on the other chain
        // (This requires coordination with the other chain's bridge contract)
    }

    function withdraw(uint256 amount) external {
        // Implement logic to burn wrapped tokens on the other chain and unlock tokens here
        // (This requires coordination with the other chain's bridge contract)
        IERC20(tokenB).transfer(msg.sender, amount);
    }
}