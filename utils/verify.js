const { network, run } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");

const verify = async function (contractAddress, arguments) {
    console.log("Verifying contract...");

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: arguments,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!");
        } else {
            console.log(error);
        }
    }
};

module.exports = {
    verify,
};
