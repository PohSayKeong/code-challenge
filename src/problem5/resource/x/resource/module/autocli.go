package resource

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "resource/api/resource/resource"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "FarmAll",
					Use:       "list-farm",
					Short:     "List all farm",
				},
				{
					RpcMethod:      "Farm",
					Use:            "show-farm [id]",
					Short:          "Shows a farm by id",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod:      "FindAnimal",
					Use:            "find-animal [animal]",
					Short:          "Query find-animal",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "animal"}},
				},

				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CreateFarm",
					Use:            "create-farm [animal] [plant]",
					Short:          "Create farm",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "animal"}, {ProtoField: "plant"}},
				},
				{
					RpcMethod:      "UpdateFarm",
					Use:            "update-farm [id] [animal] [plant]",
					Short:          "Update farm",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "animal"}, {ProtoField: "plant"}},
				},
				{
					RpcMethod:      "DeleteFarm",
					Use:            "delete-farm [id]",
					Short:          "Delete farm",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
