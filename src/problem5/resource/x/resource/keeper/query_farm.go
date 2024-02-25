package keeper

import (
	"context"

	"resource/x/resource/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FarmAll(ctx context.Context, req *types.QueryAllFarmRequest) (*types.QueryAllFarmResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var farms []types.Farm

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	farmStore := prefix.NewStore(store, types.KeyPrefix(types.FarmKey))

	pageRes, err := query.Paginate(farmStore, req.Pagination, func(key []byte, value []byte) error {
		var farm types.Farm
		if err := k.cdc.Unmarshal(value, &farm); err != nil {
			return err
		}

		farms = append(farms, farm)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFarmResponse{Farm: farms, Pagination: pageRes}, nil
}

func (k Keeper) Farm(ctx context.Context, req *types.QueryGetFarmRequest) (*types.QueryGetFarmResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	farm, found := k.GetFarm(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetFarmResponse{Farm: farm}, nil
}
