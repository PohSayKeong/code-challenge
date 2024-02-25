package resource

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"resource/testutil/sample"
	resourcesimulation "resource/x/resource/simulation"
	"resource/x/resource/types"
)

// avoid unused import issue
var (
	_ = resourcesimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateFarm = "op_weight_msg_farm"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateFarm int = 100

	opWeightMsgUpdateFarm = "op_weight_msg_farm"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateFarm int = 100

	opWeightMsgDeleteFarm = "op_weight_msg_farm"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteFarm int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	resourceGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		FarmList: []types.Farm{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		FarmCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&resourceGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateFarm int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateFarm, &weightMsgCreateFarm, nil,
		func(_ *rand.Rand) {
			weightMsgCreateFarm = defaultWeightMsgCreateFarm
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateFarm,
		resourcesimulation.SimulateMsgCreateFarm(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateFarm int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateFarm, &weightMsgUpdateFarm, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateFarm = defaultWeightMsgUpdateFarm
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateFarm,
		resourcesimulation.SimulateMsgUpdateFarm(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteFarm int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteFarm, &weightMsgDeleteFarm, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteFarm = defaultWeightMsgDeleteFarm
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteFarm,
		resourcesimulation.SimulateMsgDeleteFarm(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateFarm,
			defaultWeightMsgCreateFarm,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				resourcesimulation.SimulateMsgCreateFarm(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateFarm,
			defaultWeightMsgUpdateFarm,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				resourcesimulation.SimulateMsgUpdateFarm(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteFarm,
			defaultWeightMsgDeleteFarm,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				resourcesimulation.SimulateMsgDeleteFarm(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
