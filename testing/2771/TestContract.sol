// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.9;

import "./ERC2771Recipient.sol";

contract TestContractTrustedForwarder is ERC2771Recipient {

    address public admin;
    string public quote;
    address public owner;

    constructor(address trustedForwarder) public {
        admin = _msgSender();
        _setTrustedForwarder(trustedForwarder);
    }

    modifier onlyOwner() {
        require(_msgSender() == admin, "You are not the Admin");
        _;
    }


    function setQuote(string memory newQuote) public {
        quote = newQuote;
        owner = _msgSender();
    }

    function getQuote() view public returns(string memory currentQuote, address currentOwner) {
        currentQuote = quote;
        currentOwner = owner;
    }
}