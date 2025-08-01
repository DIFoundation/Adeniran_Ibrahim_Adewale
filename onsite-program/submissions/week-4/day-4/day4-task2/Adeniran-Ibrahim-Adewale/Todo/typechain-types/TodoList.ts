/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace TodoList {
  export type TodoStruct = {
    title: string;
    description: string;
    status: boolean;
  };

  export type TodoStructOutput = [
    title: string,
    description: string,
    status: boolean
  ] & { title: string; description: string; status: boolean };
}

export interface TodoListInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "deleteTodo"
      | "getAllTodos"
      | "newTodo"
      | "updateStatus"
      | "updateTodo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deleteTodo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTodos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newTodo",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTodo",
    values: [BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "deleteTodo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllTodos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newTodo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateTodo", data: BytesLike): Result;
}

export interface TodoList extends BaseContract {
  connect(runner?: ContractRunner | null): TodoList;
  waitForDeployment(): Promise<this>;

  interface: TodoListInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  deleteTodo: TypedContractMethod<[_index: BigNumberish], [void], "nonpayable">;

  getAllTodos: TypedContractMethod<[], [TodoList.TodoStructOutput[]], "view">;

  newTodo: TypedContractMethod<
    [_title: string, _description: string],
    [void],
    "nonpayable"
  >;

  updateStatus: TypedContractMethod<
    [_index: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateTodo: TypedContractMethod<
    [_index: BigNumberish, _title: string, _description: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deleteTodo"
  ): TypedContractMethod<[_index: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllTodos"
  ): TypedContractMethod<[], [TodoList.TodoStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "newTodo"
  ): TypedContractMethod<
    [_title: string, _description: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateStatus"
  ): TypedContractMethod<[_index: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateTodo"
  ): TypedContractMethod<
    [_index: BigNumberish, _title: string, _description: string],
    [void],
    "nonpayable"
  >;

  filters: {};
}
