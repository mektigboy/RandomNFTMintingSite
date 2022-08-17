require("dotenv").config();
require("hardhat-deploy");
require("hardhat-contract-sizer");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL;
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const ROPSTEN_RPC_URL = process.env.ROPSTEN_RPC_URL;

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const REPORT_GAS = process.env.REPORT_GAS || false;

module.exports = {
    contractSizer: {
        runOnCompile: false,
        only: ["Raffle"],
    },
    defaultNetwork: "hardhat",
    etherscan: {
        // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
            kovan: ETHERSCAN_API_KEY,
            mainnet: ETHERSCAN_API_KEY,
            rinkeby: ETHERSCAN_API_KEY,
            ropsten: ETHERSCAN_API_KEY,
        },
    },
    gasReporter: {
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        currency: "USD",
        enabled: REPORT_GAS,
        noColors: true,
        outputFile: "gas-report.txt",
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests.
    },
    namedAccounts: {
        deployer: {
            default: 0, // First account as deployer.
            1: 0, // The account "0" on one network can be different than on another.
        },
        player: {
            default: 1,
        },
    },
    networks: {
        hardhat: {
            chainId: 31337,
        },
        goerli: {
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            blockConfirmations: 6,
            chainId: 5,
            saveDeployments: true,
            url: GOERLI_RPC_URL,
        },
        kovan: {
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            blockConfirmations: 6,
            chainId: 42,
            saveDeployments: true,
            url: KOVAN_RPC_URL,
        },
        localhost: {
            chainId: 31337,
        },
        mainnet: {
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            blockConfirmations: 6,
            chainId: 1,
            saveDeployments: true,
            url: MAINNET_RPC_URL,
        },
        rinkeby: {
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            blockConfirmations: 6,
            chainId: 4,
            saveDeployments: true,
            url: RINKEBY_RPC_URL,
        },
        ropsten: {
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            blockConfirmations: 6,
            chainId: 3,
            saveDeployments: true,
            url: ROPSTEN_RPC_URL,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.15",
            },
        ],
    },
};
