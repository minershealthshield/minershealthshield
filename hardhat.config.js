/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");

module.exports = {
  solidity: "0.8.19",
  networks: {
    ganache: {
      url: "http://localhost:7545", // Configura la URL de tu red Ganache si es diferente
      chainId: 1337, // Chain ID de Ganache (por defecto es 1337)
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // Indica el índice de la cuenta que actuará como el desplegador de contratos
      1337: 0, // El mismo índice para Ganache
    },
  },
  paths: {
    sources: "./contracts",
    deploy: "./deploy",
    deployments: "./deployments",
    imports: "./imports",
  },

};



 
