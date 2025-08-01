// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GarageAccessModule = buildModule("GarageAccessModule", (m) => {

  const garageAccess = m.contract("GarageAccess");

  return { garageAccess };
});

export default GarageAccessModule;
