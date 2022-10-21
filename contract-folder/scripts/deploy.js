const { ethers } = require("hardhat")
require("dotenv").config({ path: ".env" })
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants/index")

async function main() {
    // Address of the whitelist contract that you deployed in the previous module
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS
    // URL from where we can extract the metadata for a PiedPiper NFT
    const metadataURL = METADATA_URL

    const piedPiperContract = await ethers.getContractFactory("PiedPiper")
    const deployPiedPiperContract = await piedPiperContract.deploy(metadataURL, whitelistContract)
    console.log("Deploying...")
    await deployPiedPiperContract.deployed()

    console.log(`The contract address: ${deployPiedPiperContract.address}`)
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
