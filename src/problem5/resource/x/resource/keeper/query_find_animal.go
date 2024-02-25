package keeper

import (
	"context"

	"resource/x/resource/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// find farm that has this animal
func (k Keeper) FindAnimal(goCtx context.Context, req *types.QueryFindAnimalRequest) (*types.QueryFindAnimalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	farmList := k.GetAllFarm(ctx)
	for _, farm := range farmList {
		if farm.Animal == req.Animal {
			return &types.QueryFindAnimalResponse{
				Farm: &farm, // Pass the address of the farm variable
			}, nil
		}
	}

	return nil, status.Error(codes.NotFound, "animal not found") 
}
