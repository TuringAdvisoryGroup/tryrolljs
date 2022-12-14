/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStakingRegistry,
  IStakingRegistryInterface,
} from "../IStakingRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_previousOwner",
        type: "address",
      },
    ],
    name: "assignOwnerToContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "setCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IStakingRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IStakingRegistryInterface {
    return new utils.Interface(_abi) as IStakingRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStakingRegistry {
    return new Contract(address, _abi, signerOrProvider) as IStakingRegistry;
  }
}
