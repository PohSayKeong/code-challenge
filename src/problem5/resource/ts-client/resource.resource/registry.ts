import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryAllFarmResponse } from "./types/resource/resource/query";
import { MsgUpdateFarmResponse } from "./types/resource/resource/tx";
import { MsgCreateFarm } from "./types/resource/resource/tx";
import { Params } from "./types/resource/resource/params";
import { QueryAllFarmRequest } from "./types/resource/resource/query";
import { MsgUpdateParams } from "./types/resource/resource/tx";
import { MsgDeleteFarm } from "./types/resource/resource/tx";
import { QueryParamsRequest } from "./types/resource/resource/query";
import { QueryParamsResponse } from "./types/resource/resource/query";
import { QueryGetFarmResponse } from "./types/resource/resource/query";
import { MsgDeleteFarmResponse } from "./types/resource/resource/tx";
import { MsgUpdateFarm } from "./types/resource/resource/tx";
import { Farm } from "./types/resource/resource/farm";
import { GenesisState } from "./types/resource/resource/genesis";
import { QueryGetFarmRequest } from "./types/resource/resource/query";
import { MsgUpdateParamsResponse } from "./types/resource/resource/tx";
import { MsgCreateFarmResponse } from "./types/resource/resource/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/resource.resource.QueryAllFarmResponse", QueryAllFarmResponse],
    ["/resource.resource.MsgUpdateFarmResponse", MsgUpdateFarmResponse],
    ["/resource.resource.MsgCreateFarm", MsgCreateFarm],
    ["/resource.resource.Params", Params],
    ["/resource.resource.QueryAllFarmRequest", QueryAllFarmRequest],
    ["/resource.resource.MsgUpdateParams", MsgUpdateParams],
    ["/resource.resource.MsgDeleteFarm", MsgDeleteFarm],
    ["/resource.resource.QueryParamsRequest", QueryParamsRequest],
    ["/resource.resource.QueryParamsResponse", QueryParamsResponse],
    ["/resource.resource.QueryGetFarmResponse", QueryGetFarmResponse],
    ["/resource.resource.MsgDeleteFarmResponse", MsgDeleteFarmResponse],
    ["/resource.resource.MsgUpdateFarm", MsgUpdateFarm],
    ["/resource.resource.Farm", Farm],
    ["/resource.resource.GenesisState", GenesisState],
    ["/resource.resource.QueryGetFarmRequest", QueryGetFarmRequest],
    ["/resource.resource.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/resource.resource.MsgCreateFarmResponse", MsgCreateFarmResponse],
    
];

export { msgTypes }