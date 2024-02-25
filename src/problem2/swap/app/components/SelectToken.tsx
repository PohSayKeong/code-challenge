import { Avatar, Select, SelectItem, SelectedItems } from "@nextui-org/react";

interface SelectTokenProps {
    setSelectedToken: (value: string) => void;
    selectedToken: string;
    tokens: Record<string, unknown>;
}

export const SelectToken = ({
    setSelectedToken,
    selectedToken,
    tokens,
}: SelectTokenProps) => {
    return (
        <Select
            label="Token"
            className="max-w-xs w-1/4 max-h-[40px]"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedToken(e.target.value)
            }
            renderValue={render}
            value={selectedToken}
        >
            {Object.keys(tokens).map((token) => (
                <SelectItem
                    key={token}
                    value={token}
                    className="flex-row"
                    textValue={token}
                >
                    <div className="flex gap-2 items-center">
                        <Avatar
                            alt={token}
                            className="flex-shrink-0"
                            size="sm"
                            src={`https://raw.githubusercontent.com/Switcheo/token-icons/be8b7b8ad13d1f4241a8b2a54dcf61b37f7fb4de/tokens/${token}.svg`}
                        />
                        <span className="text-small">{token}</span>
                    </div>
                </SelectItem>
            ))}
        </Select>
    );
};

const render = (items: SelectedItems<Object>) => {
    return items.map((item) => (
        <div key={item.key} className="flex items-center gap-2">
            <Avatar
                alt={item.textValue}
                className="flex-shrink-0 max-w-6 max-h-6"
                size="sm"
                src={`https://raw.githubusercontent.com/Switcheo/token-icons/be8b7b8ad13d1f4241a8b2a54dcf61b37f7fb4de/tokens/${item.textValue}.svg`}
            />
            <span className="text-small">{item.textValue}</span>
        </div>
    ));
};
