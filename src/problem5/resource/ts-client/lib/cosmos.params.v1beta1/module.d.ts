import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsResponse } from "./types/cosmos/params/v1beta1/query";
import { QuerySubspacesResponse } from "./types/cosmos/params/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/params/v1beta1/query";
import { QuerySubspacesRequest } from "./types/cosmos/params/v1beta1/query";
import { Subspace } from "./types/cosmos/params/v1beta1/query";
import { ParameterChangeProposal } from "./types/cosmos/params/v1beta1/params";
import { ParamChange } from "./types/cosmos/params/v1beta1/params";
export { QueryParamsResponse, QuerySubspacesResponse, QueryParamsRequest, QuerySubspacesRequest, Subspace, ParameterChangeProposal, ParamChange };
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySubspacesResponseParams = {
    value: QuerySubspacesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySubspacesRequestParams = {
    value: QuerySubspacesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSubspaceParams = {
    value: Subspace;
    fee?: StdFee;
    memo?: string;
};
type sendParameterChangeProposalParams = {
    value: ParameterChangeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendParamChangeParams = {
    value: ParamChange;
    fee?: StdFee;
    memo?: string;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type querySubspacesResponseParams = {
    value: QuerySubspacesResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type querySubspacesRequestParams = {
    value: QuerySubspacesRequest;
};
type subspaceParams = {
    value: Subspace;
};
type parameterChangeProposalParams = {
    value: ParameterChangeProposal;
};
type paramChangeParams = {
    value: ParamChange;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySubspacesResponse({ value, fee, memo }: sendQuerySubspacesResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQuerySubspacesRequest({ value, fee, memo }: sendQuerySubspacesRequestParams): Promise<DeliverTxResponse>;
    sendSubspace({ value, fee, memo }: sendSubspaceParams): Promise<DeliverTxResponse>;
    sendParameterChangeProposal({ value, fee, memo }: sendParameterChangeProposalParams): Promise<DeliverTxResponse>;
    sendParamChange({ value, fee, memo }: sendParamChangeParams): Promise<DeliverTxResponse>;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    querySubspacesResponse({ value }: querySubspacesResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    querySubspacesRequest({ value }: querySubspacesRequestParams): EncodeObject;
    subspace({ value }: subspaceParams): EncodeObject;
    parameterChangeProposal({ value }: parameterChangeProposalParams): EncodeObject;
    paramChange({ value }: paramChangeParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosParamsV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
