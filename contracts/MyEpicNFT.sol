// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract MyEpicNFT is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721 ("SpongeBob", "BOB") {
        console.log("NFT Initialized with name 'SpongeBob' and Symbol 'BOB'. ");
    }

    function mintNFT()  public {
        // get the token id 
        uint newId = _tokenIds.current();
        // send the token to msg.sender 
        _safeMint(msg.sender, newId);
        _setTokenURI(newId, 'https://jsonkeeper.com/b/RUUS');
        console.log("An NFT with id %s is minted succesfully to %s", newId, msg.sender);
        // increment the id 
        _tokenIds.increment();
    }


}
