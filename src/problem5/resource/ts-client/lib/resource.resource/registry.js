import { QueryParamsResponse } from "./types/resource/resource/query";
import { Params } from "./types/resource/resource/params";
import { MsgUpdateParamsResponse } from "./types/resource/resource/tx";
import { QueryParamsRequest } from "./types/resource/resource/query";
import { MsgUpdateParams } from "./types/resource/resource/tx";
import { GenesisState } from "./types/resource/resource/genesis";
const msgTypes = [
    ["/resource.resource.QueryParamsResponse", QueryParamsResponse],
    ["/resource.resource.Params", Params],
    ["/resource.resource.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/resource.resource.QueryParamsRequest", QueryParamsRequest],
    ["/resource.resource.MsgUpdateParams", MsgUpdateParams],
    ["/resource.resource.GenesisState", GenesisState],
];
export { msgTypes };
