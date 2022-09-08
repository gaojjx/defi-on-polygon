import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    hardhat: {
	  // also changes the chainId of localhost to keep metamask happy
	  // when we run `npx hardhat node` and connect to --network localhost
      chainId: 1337,
    },
    polygon: {
      url: 'https://powerful-hardworking-pond.matic-testnet.discover.quiknode.pro/1a97dc3306e5c98654a03ae80315cf314701b199/',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};


export default config;