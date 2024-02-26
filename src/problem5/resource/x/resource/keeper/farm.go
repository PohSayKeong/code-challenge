package keeper

import (
	"context"
	"encoding/binary"

	"resource/x/resource/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetFarmCount get the total number of farm
func (k Keeper) GetFarmCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.FarmCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetFarmCount set the total number of farm
func (k Keeper) SetFarmCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.FarmCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendFarm appends a farm in the store with a new id and update the count
func (k Keeper) AppendFarm(
	ctx context.Context,
	farm types.Farm,
) uint64 {
	// Create the farm
	count := k.GetFarmCount(ctx)

	// Set the ID of the appended value
	farm.Id = count
	farm.Animal = "Cow"

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.FarmKey))
	appendedValue := k.cdc.MustMarshal(&farm)
	store.Set(GetFarmIDBytes(farm.Id), appendedValue)

	// Update farm count
	k.SetFarmCount(ctx, count+1)

	return count
}

// SetFarm set a specific farm in the store
func (k Keeper) SetFarm(ctx context.Context, farm types.Farm) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.FarmKey))
	b := k.cdc.MustMarshal(&farm)
	store.Set(GetFarmIDBytes(farm.Id), b)
}

// GetFarm returns a farm from its id
func (k Keeper) GetFarm(ctx context.Context, id uint64) (val types.Farm, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.FarmKey))
	b := store.Get(GetFarmIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFarm removes a farm from the store
func (k Keeper) RemoveFarm(ctx context.Context, id uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.FarmKey))
	store.Delete(GetFarmIDBytes(id))
}

// GetAllFarm returns all farm
func (k Keeper) GetAllFarm(ctx context.Context) (list []types.Farm) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.FarmKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Farm
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFarmIDBytes returns the byte representation of the ID
func GetFarmIDBytes(id uint64) []byte {
	bz := types.KeyPrefix(types.FarmKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, id)
	return bz
}
