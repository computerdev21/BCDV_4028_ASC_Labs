// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("TokenA", "TKA") {
        _mint(msg.sender, 1000000000000000000000000); // Mint 1000 tokens to the deployer
    }
}