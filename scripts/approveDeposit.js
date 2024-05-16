const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const contractJSON = require("../artifacts/contracts/OreToken.sol/OreToken.json");

const contractAddress = "0x3BAf8Bf8dd5B5d3A1cf5fEC1397118E4C11C9317";
const contractABI = contractJSON.abi;
const fxERC721ContractAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xd9102eDDbE8f4944883fea7328cEBEfb2BcB6A98";

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC721ContractAddress
  );
  const totalNFTs = await contract.totalSupply();
  for (let i = 0; i < totalNFTs; i++) {
    const approveTx = await contract.approve(fxERC721ContractAddress, i);
    await approveTx.wait();
    console.log(`NFT with tokenId ${i} approved`);
  }
  console.log("Approvals confirmed");

  for (let i = 0; i < totalNFTs; i++) {
    const depositTx = await fxContract.deposit(
      contractAddress,
      walletAddress,
      i,
      "0x6556"
    );
    await depositTx.wait();
    console.log(`NFT with TokenId ${i} deposited`);
  }

  console.log("NFTs deposited");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
