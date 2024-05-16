const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/DamToken.sol/DamToken.json");

const contractAddress = "0x8b760346B168B1e5de66621b5A865c463ca075fc";
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
