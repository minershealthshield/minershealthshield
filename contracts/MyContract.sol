// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DataStorage {
    string public storedData;
    bytes32 public blockHash;

    function storeData(string memory data) public {
        storedData = data;
        blockHash = blockhash(block.number);
    }
}