require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.13",
        settings: {
          evmVersion: "istanbul",
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.6.9",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.7.6",
        settings: {
          evmVersion: "istanbul",
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.5.12",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.6.0"
      },
      {
        version: "0.8.0"
      },
      {
        version: "0.8.2"
      }
    ]
  },
  networks: {
    okbcTestnet: {
      url: "https://okbtestrpc.okbchain.org",
      accounts: [""],
      chainId: 195,
    },
  },
  // etherscan: {
  //   apiKey: {
  //     oklinkExplorer: POLYGON_SCAN_KEY,
  //   },
  // },
};