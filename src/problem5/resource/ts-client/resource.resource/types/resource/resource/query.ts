/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Farm } from "./farm";
import { Params } from "./params";

export const protobufPackage = "resource.resource";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetFarmRequest {
  id: number;
}

export interface QueryGetFarmResponse {
  Farm: Farm | undefined;
}

export interface QueryAllFarmRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFarmResponse {
  Farm: Farm[];
  pagination: PageResponse | undefined;
}

export interface QueryFindAnimalRequest {
  animal: string;
}

export interface QueryFindAnimalResponse {
  farm: Farm | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetFarmRequest(): QueryGetFarmRequest {
  return { id: 0 };
}

export const QueryGetFarmRequest = {
  encode(message: QueryGetFarmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFarmRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFarmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetFarmRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetFarmRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetFarmRequest>, I>>(base?: I): QueryGetFarmRequest {
    return QueryGetFarmRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFarmRequest>, I>>(object: I): QueryGetFarmRequest {
    const message = createBaseQueryGetFarmRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetFarmResponse(): QueryGetFarmResponse {
  return { Farm: undefined };
}

export const QueryGetFarmResponse = {
  encode(message: QueryGetFarmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Farm !== undefined) {
      Farm.encode(message.Farm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFarmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFarmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Farm = Farm.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetFarmResponse {
    return { Farm: isSet(object.Farm) ? Farm.fromJSON(object.Farm) : undefined };
  },

  toJSON(message: QueryGetFarmResponse): unknown {
    const obj: any = {};
    if (message.Farm !== undefined) {
      obj.Farm = Farm.toJSON(message.Farm);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetFarmResponse>, I>>(base?: I): QueryGetFarmResponse {
    return QueryGetFarmResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFarmResponse>, I>>(object: I): QueryGetFarmResponse {
    const message = createBaseQueryGetFarmResponse();
    message.Farm = (object.Farm !== undefined && object.Farm !== null) ? Farm.fromPartial(object.Farm) : undefined;
    return message;
  },
};

function createBaseQueryAllFarmRequest(): QueryAllFarmRequest {
  return { pagination: undefined };
}

export const QueryAllFarmRequest = {
  encode(message: QueryAllFarmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFarmRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFarmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllFarmRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFarmRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFarmRequest>, I>>(base?: I): QueryAllFarmRequest {
    return QueryAllFarmRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFarmRequest>, I>>(object: I): QueryAllFarmRequest {
    const message = createBaseQueryAllFarmRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFarmResponse(): QueryAllFarmResponse {
  return { Farm: [], pagination: undefined };
}

export const QueryAllFarmResponse = {
  encode(message: QueryAllFarmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Farm) {
      Farm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFarmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFarmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Farm.push(Farm.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllFarmResponse {
    return {
      Farm: Array.isArray(object?.Farm) ? object.Farm.map((e: any) => Farm.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFarmResponse): unknown {
    const obj: any = {};
    if (message.Farm?.length) {
      obj.Farm = message.Farm.map((e) => Farm.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllFarmResponse>, I>>(base?: I): QueryAllFarmResponse {
    return QueryAllFarmResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFarmResponse>, I>>(object: I): QueryAllFarmResponse {
    const message = createBaseQueryAllFarmResponse();
    message.Farm = object.Farm?.map((e) => Farm.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFindAnimalRequest(): QueryFindAnimalRequest {
  return { animal: "" };
}

export const QueryFindAnimalRequest = {
  encode(message: QueryFindAnimalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.animal !== "") {
      writer.uint32(10).string(message.animal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFindAnimalRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFindAnimalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.animal = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFindAnimalRequest {
    return { animal: isSet(object.animal) ? String(object.animal) : "" };
  },

  toJSON(message: QueryFindAnimalRequest): unknown {
    const obj: any = {};
    if (message.animal !== "") {
      obj.animal = message.animal;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFindAnimalRequest>, I>>(base?: I): QueryFindAnimalRequest {
    return QueryFindAnimalRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFindAnimalRequest>, I>>(object: I): QueryFindAnimalRequest {
    const message = createBaseQueryFindAnimalRequest();
    message.animal = object.animal ?? "";
    return message;
  },
};

function createBaseQueryFindAnimalResponse(): QueryFindAnimalResponse {
  return { farm: undefined };
}

export const QueryFindAnimalResponse = {
  encode(message: QueryFindAnimalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farm !== undefined) {
      Farm.encode(message.farm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFindAnimalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFindAnimalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.farm = Farm.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFindAnimalResponse {
    return { farm: isSet(object.farm) ? Farm.fromJSON(object.farm) : undefined };
  },

  toJSON(message: QueryFindAnimalResponse): unknown {
    const obj: any = {};
    if (message.farm !== undefined) {
      obj.farm = Farm.toJSON(message.farm);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFindAnimalResponse>, I>>(base?: I): QueryFindAnimalResponse {
    return QueryFindAnimalResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFindAnimalResponse>, I>>(object: I): QueryFindAnimalResponse {
    const message = createBaseQueryFindAnimalResponse();
    message.farm = (object.farm !== undefined && object.farm !== null) ? Farm.fromPartial(object.farm) : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Farm items. */
  Farm(request: QueryGetFarmRequest): Promise<QueryGetFarmResponse>;
  FarmAll(request: QueryAllFarmRequest): Promise<QueryAllFarmResponse>;
  /** Queries a list of FindAnimal items. */
  FindAnimal(request: QueryFindAnimalRequest): Promise<QueryFindAnimalResponse>;
}

export const QueryServiceName = "resource.resource.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Farm = this.Farm.bind(this);
    this.FarmAll = this.FarmAll.bind(this);
    this.FindAnimal = this.FindAnimal.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Farm(request: QueryGetFarmRequest): Promise<QueryGetFarmResponse> {
    const data = QueryGetFarmRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Farm", data);
    return promise.then((data) => QueryGetFarmResponse.decode(_m0.Reader.create(data)));
  }

  FarmAll(request: QueryAllFarmRequest): Promise<QueryAllFarmResponse> {
    const data = QueryAllFarmRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FarmAll", data);
    return promise.then((data) => QueryAllFarmResponse.decode(_m0.Reader.create(data)));
  }

  FindAnimal(request: QueryFindAnimalRequest): Promise<QueryFindAnimalResponse> {
    const data = QueryFindAnimalRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAnimal", data);
    return promise.then((data) => QueryFindAnimalResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
