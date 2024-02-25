# resource
**resource** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Generate the web frontend for your blockchain with the following command:

- `ignite generate hooks`
- cd into `/react`
- `npm install `
- `npm run dev`

## Useful commands
`./resourced tx resource`

## TODOs
1. Create a resource.
   - `ignite scaffold farm animal plant`
   - `./resourced tx resource create-farm 'Cats' 'Corn' --from alice --chain-id resource`
2. List resources with basic filters.
   - `./resourced query resource list-farm`
   - Find farm by id `./resourced query resource find-animal Cats`
   - Dev process: `ignite scaffold query find-animal animal --response farm:Farm` and code can be found in `query_find_animal.go`
3. Get details of a resource.
   - `./resourced query resource show-farm 0`
4. Update resource details.
   - `./resourced tx resource update-farm 0 'Pigs' 'Potato' --from alice --chain-id resource`
5. Delete a resource.
   - `./resourced tx resource delete-farm 0 --from alice --chain-id resource`
