// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IWhitelist {
    function checkWhitelistAddress(address) external view returns (bool);
}
