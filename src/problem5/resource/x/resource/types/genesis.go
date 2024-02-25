package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		FarmList: []Farm{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in farm
	farmIdMap := make(map[uint64]bool)
	farmCount := gs.GetFarmCount()
	for _, elem := range gs.FarmList {
		if _, ok := farmIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for farm")
		}
		if elem.Id >= farmCount {
			return fmt.Errorf("farm id should be lower or equal than the last id")
		}
		farmIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
