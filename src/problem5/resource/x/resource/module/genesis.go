package resource

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"resource/x/resource/keeper"
	"resource/x/resource/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the farm
	for _, elem := range genState.FarmList {
		k.SetFarm(ctx, elem)
	}

	// Set farm count
	k.SetFarmCount(ctx, genState.FarmCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.FarmList = k.GetAllFarm(ctx)
	genesis.FarmCount = k.GetFarmCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
