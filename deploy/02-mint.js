const { ethers, network } = require("hardhat");

module.exports = async function ({ getNamedAccounts }) {
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    const randomBinariesNFT = await ethers.getContract("RandomBinariesNFT", deployer);
    const mintFee = await randomBinariesNFT.getMintFee();
    const randomMintTransaction = await randomBinariesNFT.requestNFT({
        value: mintFee.toString(),
    });
    const randomMintTransactionReceipt = await randomMintTransaction.wait(1);

    await new Promise(async function (resolve, reject) {
        setTimeout(
            () => reject("Timeout: event <NFTMinted> did not fire."),
            300000 // 5 minutes
        );
        randomBinariesNFT.once("NFTMinted", async function () {
            resolve();
        });

        if (chainId == 31337) {
            const requestId =
                randomMintTransactionReceipt.events[1].args.requestId.toString();
            const coordinatorMock = await ethers.getContract(
                "VRFCoordinatorV2Mock",
                deployer
            );
            await coordinatorMock.fulfillRandomWords(
                requestId,
                randomBinariesNFT.address
            );
        }
    });

    console.log(
        `Random Binaries NFT index 0 has token URI: ${await randomBinariesNFT.tokenURI(0)}`
    );
};

module.exports.tags = ["all", "mint"];
