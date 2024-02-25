package keeper_test

import (
	"context"
	"testing"

	keepertest "resource/testutil/keeper"
	"resource/testutil/nullify"
	"resource/x/resource/keeper"
	"resource/x/resource/types"

	"github.com/stretchr/testify/require"
)

func createNFarm(keeper keeper.Keeper, ctx context.Context, n int) []types.Farm {
	items := make([]types.Farm, n)
	for i := range items {
		items[i].Id = keeper.AppendFarm(ctx, items[i])
	}
	return items
}

func TestFarmGet(t *testing.T) {
	keeper, ctx := keepertest.ResourceKeeper(t)
	items := createNFarm(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetFarm(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestFarmRemove(t *testing.T) {
	keeper, ctx := keepertest.ResourceKeeper(t)
	items := createNFarm(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFarm(ctx, item.Id)
		_, found := keeper.GetFarm(ctx, item.Id)
		require.False(t, found)
	}
}

func TestFarmGetAll(t *testing.T) {
	keeper, ctx := keepertest.ResourceKeeper(t)
	items := createNFarm(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFarm(ctx)),
	)
}

func TestFarmCount(t *testing.T) {
	keeper, ctx := keepertest.ResourceKeeper(t)
	items := createNFarm(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetFarmCount(ctx))
}
