# NFT Bridge

This repository serves as a practical guide on creating NFTs based on ERC721 standards and seamlessly bridging them from Ethereum (ETH) to Polygon (Matic). The central contract is an ERC721A extension named `OreToken`, enabling NFT minting across both Ethereum and Polygon networks.

---

## Technologies Used

- **Solidity:** Used for writing the BoluToken ERC721 contract.
- **Hardhat:** A development environment for compiling, deploying, and testing smart contracts.
- **Pinata (IPFS):** A decentralized storage system for hosting NFT images.
- **FxPortal:** Facilitates interoperability between blockchain networks, allowing asset bridging between Ethereum and Polygon.
<!-- - **Gencraft:** An AI image generator utilized to create NFT images from textual descriptions. -->
- **Gemini:** A state-of-the-art AI model developed by Google, capable of generating artwork from textual prompts. In this project, Gemini was utilized to create the digital artworks hosted on IPFS.

---

## Steps to Mint and Bridge NFTs

0. Clone the repository and run `npm install` to install dependencies.

1. **Mint NFTs:** Deploy the BoluToken contract on the Goerli Ethereum testnet with `npx hardhat run scripts/deploy.js --network goerli` and mint NFTs using `npx hardhat run scripts/mint.js --network goerli`. Adjust the number of minted NFTs using the `noOfNFTs` variable in "mint.js".

2. **Upload Images to IPFS:** Use [Pinata](https://www.pinata.cloud/) to upload NFT images to IPFS and obtain the _baseURI_ of your IPFS directory.

3. **Approve and Deposit:** Use `npx hardhat run scripts/approveDeposit.js --network goerli` to approve and deposit NFTs to the Polygon network via the FxERC721RootTunnel contract.

4. **Wait for Completion:** Allow 20-30 minutes for tokens to appear in your Polygon account after depositing them. Learn more about FxPortal [here](https://wiki.polygon.technology/docs/pos/design/bridge/l1-l2-communication/fx-portal/#how-does-it-work).

---

## Accessing Image Descriptions

Use `npx hardhat run scripts/prompt.js --network goerli` to explore textual descriptions linked with NFT images after deploying the BoluToken contract.

---

## Accessing NFT Details

After minting NFTs with the BoluToken contract, access details for each NFT using `npx hardhat run scripts/nftDetail.js --network goerli`.

The script displays:

- Unique identifier of the NFT.
- Textual prompt used to generate the corresponding NFT image with Gencraft.
- Owner's address of the NFT.
- URI associated with the NFT.
- Public URL where the NFT image can be viewed on IPFS.

Modify the `tokenId` variable in `nftetail.js` to view details of different NFTs.