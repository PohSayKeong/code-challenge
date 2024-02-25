package resource_test

import (
	"testing"

	keepertest "resource/testutil/keeper"
	"resource/testutil/nullify"
	resource "resource/x/resource/module"
	"resource/x/resource/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		FarmList: []types.Farm{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		FarmCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ResourceKeeper(t)
	resource.InitGenesis(ctx, k, genesisState)
	got := resource.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.FarmList, got.FarmList)
	require.Equal(t, genesisState.FarmCount, got.FarmCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
