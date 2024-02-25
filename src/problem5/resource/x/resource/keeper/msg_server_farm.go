package keeper

import (
	"context"
	"fmt"

	"resource/x/resource/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateFarm(goCtx context.Context, msg *types.MsgCreateFarm) (*types.MsgCreateFarmResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var farm = types.Farm{
		Creator: msg.Creator,
		Animal:  msg.Animal,
		Plant:   msg.Plant,
	}

	id := k.AppendFarm(
		ctx,
		farm,
	)

	return &types.MsgCreateFarmResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateFarm(goCtx context.Context, msg *types.MsgUpdateFarm) (*types.MsgUpdateFarmResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var farm = types.Farm{
		Creator: msg.Creator,
		Id:      msg.Id,
		Animal:  msg.Animal,
		Plant:   msg.Plant,
	}

	// Checks that the element exists
	val, found := k.GetFarm(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetFarm(ctx, farm)

	return &types.MsgUpdateFarmResponse{}, nil
}

func (k msgServer) DeleteFarm(goCtx context.Context, msg *types.MsgDeleteFarm) (*types.MsgDeleteFarmResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetFarm(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveFarm(ctx, msg.Id)

	return &types.MsgDeleteFarmResponse{}, nil
}
