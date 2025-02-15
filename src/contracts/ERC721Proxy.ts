/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
} from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface ERC721ProxyInterface extends utils.Interface {
  contractName: 'ERC721Proxy';
  functions: {
    'addAuthorizedAddress(address)': FunctionFragment;
    'authorities(uint256)': FunctionFragment;
    'removeAuthorizedAddress(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'removeAuthorizedAddressAtIndex(address,uint256)': FunctionFragment;
    'getProxyId()': FunctionFragment;
    'authorized(address)': FunctionFragment;
    'getAuthorizedAddresses()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'addAuthorizedAddress',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'authorities',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeAuthorizedAddress',
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'removeAuthorizedAddressAtIndex',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getProxyId',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'authorized', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'getAuthorizedAddresses',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: 'addAuthorizedAddress',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'authorities',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeAuthorizedAddress',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'removeAuthorizedAddressAtIndex',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getProxyId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'authorized', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getAuthorizedAddresses',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;

  events: {
    'AuthorizedAddressAdded(address,address)': EventFragment;
    'AuthorizedAddressRemoved(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AuthorizedAddressAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AuthorizedAddressRemoved'): EventFragment;
}

export type AuthorizedAddressAddedEvent = TypedEvent<
  [string, string],
  { target: string; caller: string }
>;

export type AuthorizedAddressAddedEventFilter =
  TypedEventFilter<AuthorizedAddressAddedEvent>;

export type AuthorizedAddressRemovedEvent = TypedEvent<
  [string, string],
  { target: string; caller: string }
>;

export type AuthorizedAddressRemovedEventFilter =
  TypedEventFilter<AuthorizedAddressRemovedEvent>;

export interface ERC721Proxy extends BaseContract {
  contractName: 'ERC721Proxy';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721ProxyInterface;

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
    addAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorities(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProxyId(overrides?: CallOverrides): Promise<[string]>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    getAuthorizedAddresses(overrides?: CallOverrides): Promise<[string[]]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAuthorizedAddress(
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorities(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  removeAuthorizedAddress(
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAuthorizedAddressAtIndex(
    target: string,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProxyId(overrides?: CallOverrides): Promise<string>;

  authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  getAuthorizedAddresses(overrides?: CallOverrides): Promise<string[]>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAuthorizedAddress(
      target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    authorities(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    removeAuthorizedAddress(
      target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getProxyId(overrides?: CallOverrides): Promise<string>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    getAuthorizedAddresses(overrides?: CallOverrides): Promise<string[]>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'AuthorizedAddressAdded(address,address)'(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressAddedEventFilter;
    AuthorizedAddressAdded(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressAddedEventFilter;

    'AuthorizedAddressRemoved(address,address)'(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressRemovedEventFilter;
    AuthorizedAddressRemoved(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressRemovedEventFilter;
  };

  estimateGas: {
    addAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorities(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProxyId(overrides?: CallOverrides): Promise<BigNumber>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAuthorizedAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorities(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProxyId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    authorized(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizedAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
