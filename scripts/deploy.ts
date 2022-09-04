import { ethers } from "hardhat";

const main = async() => {

  const Lock = await ethers.getContractFactory("MyEpicNFT");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log("Contract Deployed to :", lock.address);

  let txn = await lock.mintNFT();
  await txn.wait();
  console.log('Minted #1');

  txn = await lock.mintNFT();
  await txn.wait();
  console.log('Minted #2');
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const run = async() => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    console.warn('There was a problem encountered during deployment');
    process.exit(1);
  }
}


run();

// contract deployed to : 0x08451394308Cd80F65983C88576d3D6224bef5B7 