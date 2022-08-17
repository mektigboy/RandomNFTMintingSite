const developmentChains = ["hardhat", "localhost"];

const networkConfig = {
    default: {
        keepersUpdateInterval: "30",
        name: "hardhat",
    },
    1: {
        keepersUpdateInterval: "30",
        name: "mainnet",
    },
    4: {
        callbackGasLimit: "500000", // 500,000 gas
        keepersUpdateInterval: "30",
        gasLane:
            "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        name: "rinkeby",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        subscriptionId: "9747", // Subscription id.
    },
    31337: {
        callbackGasLimit: "500000", // 500,000 gas
        keepersUpdateInterval: "30",
        gasLane:
            "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        name: "localhost",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        subscriptionId: "9747",
    },
};

module.exports = {
    developmentChains,
    networkConfig,
};
