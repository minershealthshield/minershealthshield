const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Contract = await ethers.getContractFactory("DataStorage"); // Reemplaza con el nombre de tu contrato
  const contract = await Contract.deploy();

  console.log("Contract address:", contract.address);

  // Para interactuar con el contrato desde la aplicación, guarda la dirección del contrato en un archivo
  const fs = require("fs");
  const contractAddress = contract.address;
  fs.writeFileSync("contractAddress.json", JSON.stringify(contractAddress));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
