const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/OreToken.sol/OreToken.json");

const contractAddress = "0x3BAf8Bf8dd5B5d3A1cf5fEC1397118E4C11C9317";
const contractABI = contractJSON.abi;
const walletAddress = "0xd9102eDDbE8f4944883fea7328cEBEfb2BcB6A98";
let noOfNFTs = 5;
async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  const tx = await contract.mint(walletAddress, noOfNFTs);
  await tx.wait();

  console.log(
    "You now have: " +
      (await contract.balanceOf(walletAddress)) +
      " NFTs"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
