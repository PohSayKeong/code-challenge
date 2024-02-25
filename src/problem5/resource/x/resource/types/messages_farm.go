package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateFarm{}

func NewMsgCreateFarm(creator string, animal string, plant string) *MsgCreateFarm {
	return &MsgCreateFarm{
		Creator: creator,
		Animal:  animal,
		Plant:   plant,
	}
}

func (msg *MsgCreateFarm) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateFarm{}

func NewMsgUpdateFarm(creator string, id uint64, animal string, plant string) *MsgUpdateFarm {
	return &MsgUpdateFarm{
		Id:      id,
		Creator: creator,
		Animal:  animal,
		Plant:   plant,
	}
}

func (msg *MsgUpdateFarm) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteFarm{}

func NewMsgDeleteFarm(creator string, id uint64) *MsgDeleteFarm {
	return &MsgDeleteFarm{
		Id:      id,
		Creator: creator,
	}
}

func (msg *MsgDeleteFarm) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
