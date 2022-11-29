/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface TokenFactoryInterface extends utils.Interface {
  functions: {
    "TokenVestingInstance()": FunctionFragment;
    "calculateProportions(uint256,uint8,uint8,uint8)": FunctionFragment;
    "createToken(string,string,uint8,uint256,uint8,uint256,address,uint8,address,uint8)": FunctionFragment;
    "getTokenVesting()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "migrateTokenFactory(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rollWallet()": FunctionFragment;
    "scalePercentages(uint8,uint8,uint8)": FunctionFragment;
    "setPlatformWallet(address)": FunctionFragment;
    "setTokenVesting(address)": FunctionFragment;
    "setVestingAddress(address,address,address)": FunctionFragment;
    "setVestingReferral(address,address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validateTokenVestingOwner(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "TokenVestingInstance"
      | "calculateProportions"
      | "createToken"
      | "getTokenVesting"
      | "initialize"
      | "migrateTokenFactory"
      | "owner"
      | "renounceOwnership"
      | "rollWallet"
      | "scalePercentages"
      | "setPlatformWallet"
      | "setTokenVesting"
      | "setVestingAddress"
      | "setVestingReferral"
      | "transferOwnership"
      | "validateTokenVestingOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "TokenVestingInstance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateProportions",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenVesting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateTokenFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rollWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scalePercentages",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformWallet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenVesting",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVestingAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setVestingReferral",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTokenVestingOwner",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "TokenVestingInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateProportions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "migrateTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rollWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scalePercentages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVestingAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVestingReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateTokenVestingOwner",
    data: BytesLike
  ): Result;

  events: {
    "LogTokenCreated(string,string,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface LogTokenCreatedEventObject {
  name: string;
  symbol: string;
  token: string;
  vestingBeneficiary: string;
}
export type LogTokenCreatedEvent = TypedEvent<
  [string, string, string, string],
  LogTokenCreatedEventObject
>;

export type LogTokenCreatedEventFilter = TypedEventFilter<LogTokenCreatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    TokenVestingInstance(overrides?: CallOverrides): Promise<[string]>;

    calculateProportions(
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber, BigNumber, BigNumber]] & {
        proportions: [BigNumber, BigNumber, BigNumber, BigNumber];
      }
    >;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _vestingPeriodInDays: PromiseOrValue<BigNumberish>,
      _vestingBeneficiary: PromiseOrValue<string>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referral: PromiseOrValue<string>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTokenVesting(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _tokenVesting: PromiseOrValue<string>,
      _rollWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    migrateTokenFactory(
      _newTokenFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rollWallet(overrides?: CallOverrides): Promise<[string]>;

    scalePercentages(
      p0: PromiseOrValue<BigNumberish>,
      p1: PromiseOrValue<BigNumberish>,
      p2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber, BigNumber]] & {
        proportions: [BigNumber, BigNumber, BigNumber];
      }
    >;

    setPlatformWallet(
      _newPlatformWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTokenVesting(
      _newTokenVesting: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVestingAddress(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _newVestingBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVestingReferral(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _vestingReferral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateTokenVestingOwner(
      a1: PromiseOrValue<string>,
      a2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  TokenVestingInstance(overrides?: CallOverrides): Promise<string>;

  calculateProportions(
    _totalSupply: PromiseOrValue<BigNumberish>,
    _initialPercentage: PromiseOrValue<BigNumberish>,
    _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
    _referralPercentage: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  createToken(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _totalSupply: PromiseOrValue<BigNumberish>,
    _initialPercentage: PromiseOrValue<BigNumberish>,
    _vestingPeriodInDays: PromiseOrValue<BigNumberish>,
    _vestingBeneficiary: PromiseOrValue<string>,
    _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
    _referral: PromiseOrValue<string>,
    _referralPercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTokenVesting(overrides?: CallOverrides): Promise<string>;

  initialize(
    _tokenVesting: PromiseOrValue<string>,
    _rollWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  migrateTokenFactory(
    _newTokenFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rollWallet(overrides?: CallOverrides): Promise<string>;

  scalePercentages(
    p0: PromiseOrValue<BigNumberish>,
    p1: PromiseOrValue<BigNumberish>,
    p2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  setPlatformWallet(
    _newPlatformWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTokenVesting(
    _newTokenVesting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVestingAddress(
    _vestingBeneficiary: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _newVestingBeneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVestingReferral(
    _vestingBeneficiary: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _vestingReferral: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateTokenVestingOwner(
    a1: PromiseOrValue<string>,
    a2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    TokenVestingInstance(overrides?: CallOverrides): Promise<string>;

    calculateProportions(
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _vestingPeriodInDays: PromiseOrValue<BigNumberish>,
      _vestingBeneficiary: PromiseOrValue<string>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referral: PromiseOrValue<string>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenVesting(overrides?: CallOverrides): Promise<string>;

    initialize(
      _tokenVesting: PromiseOrValue<string>,
      _rollWallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    migrateTokenFactory(
      _newTokenFactory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rollWallet(overrides?: CallOverrides): Promise<string>;

    scalePercentages(
      p0: PromiseOrValue<BigNumberish>,
      p1: PromiseOrValue<BigNumberish>,
      p2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    setPlatformWallet(
      _newPlatformWallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenVesting(
      _newTokenVesting: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVestingAddress(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _newVestingBeneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVestingReferral(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _vestingReferral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateTokenVestingOwner(
      a1: PromiseOrValue<string>,
      a2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogTokenCreated(string,string,address,address)"(
      name?: null,
      symbol?: null,
      token?: PromiseOrValue<string> | null,
      vestingBeneficiary?: null
    ): LogTokenCreatedEventFilter;
    LogTokenCreated(
      name?: null,
      symbol?: null,
      token?: PromiseOrValue<string> | null,
      vestingBeneficiary?: null
    ): LogTokenCreatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    TokenVestingInstance(overrides?: CallOverrides): Promise<BigNumber>;

    calculateProportions(
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _vestingPeriodInDays: PromiseOrValue<BigNumberish>,
      _vestingBeneficiary: PromiseOrValue<string>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referral: PromiseOrValue<string>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTokenVesting(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _tokenVesting: PromiseOrValue<string>,
      _rollWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    migrateTokenFactory(
      _newTokenFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rollWallet(overrides?: CallOverrides): Promise<BigNumber>;

    scalePercentages(
      p0: PromiseOrValue<BigNumberish>,
      p1: PromiseOrValue<BigNumberish>,
      p2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPlatformWallet(
      _newPlatformWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTokenVesting(
      _newTokenVesting: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVestingAddress(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _newVestingBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVestingReferral(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _vestingReferral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateTokenVestingOwner(
      a1: PromiseOrValue<string>,
      a2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    TokenVestingInstance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateProportions(
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _totalSupply: PromiseOrValue<BigNumberish>,
      _initialPercentage: PromiseOrValue<BigNumberish>,
      _vestingPeriodInDays: PromiseOrValue<BigNumberish>,
      _vestingBeneficiary: PromiseOrValue<string>,
      _initialPlatformPercentage: PromiseOrValue<BigNumberish>,
      _referral: PromiseOrValue<string>,
      _referralPercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTokenVesting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _tokenVesting: PromiseOrValue<string>,
      _rollWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    migrateTokenFactory(
      _newTokenFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rollWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scalePercentages(
      p0: PromiseOrValue<BigNumberish>,
      p1: PromiseOrValue<BigNumberish>,
      p2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPlatformWallet(
      _newPlatformWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTokenVesting(
      _newTokenVesting: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVestingAddress(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _newVestingBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVestingReferral(
      _vestingBeneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _vestingReferral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateTokenVestingOwner(
      a1: PromiseOrValue<string>,
      a2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}