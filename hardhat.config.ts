import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const APIKEY: string = process.env.APIKEY!;
const PRIVATEKEY: string = process.env.PRIVATEKEY!;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks:{
    goerli: {
      url: APIKEY,
      accounts: [PRIVATEKEY]
    }
  }
};

export default config;
