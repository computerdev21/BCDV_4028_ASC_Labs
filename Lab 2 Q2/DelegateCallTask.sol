// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Called Contract
contract First {
    //state variable
    uint public value;

    //function to set the value
    function setValue(uint _value) public {
        value = _value;
    }
}

//Calling contract
contract Second {
    //declaring state variable
    address public firstContract;

    //asigning the address
    constructor(address _firstContract) {
        firstContract = _firstContract;
    }

    //Calling the contract via a delegate call and calling the setValue() function
    function updateValue(uint _value) public {
        (bool success,) = firstContract.delegatecall(abi.encodeWithSignature("setValue(uint256)", _value));
        require(success, "Delegate call failed");
    }
}