/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
    Card,
    CardHeader,
    CardBody,
    Image,
    Input,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { SelectToken } from "./components/SelectToken";
import { SwapModal } from "./components/SwapModal";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SwapNavbar } from "./Navbar";

interface Token {
    currency: string;
    price: number;
    date: string;
}

interface TokensMap {
    [key: string]: number;
}

export default function Home() {
    const [tokens, setTokens] = useState<TokensMap>({});
    const [selectedToken, setSelectedToken] = useState<string>("");
    const [destinationToken, setDestinationToken] = useState<string>("");
    const [inAmount, setInAmount] = useState<string>("");
    const [outAmount, setOutAmount] = useState<string>("");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isConnected } = useAccount();

    const canClick = selectedToken && destinationToken && inAmount && outAmount;

    useEffect(() => {
        const fetchData = async () => {
            const pricesRes = await fetch(
                "https://interview.switcheo.com/prices.json"
            );

            const tokensMap: TokensMap = {};
            const pricesJson = await pricesRes.json();
            pricesJson.forEach((token: Token) => {
                tokensMap[token.currency] = token.price;
            });
            setTokens(tokensMap);
        };

        fetchData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInAmount(e.target.value);
        if (!selectedToken || !destinationToken) return;
        setOutAmount(
            (
                (Number(e.target.value) * tokens[selectedToken]) /
                tokens[destinationToken]
            ).toPrecision(5)
        );
    };

    const handleOutputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOutAmount(e.target.value);
        if (!selectedToken || !destinationToken) return;
        setInAmount(
            (
                (Number(e.target.value) * tokens[destinationToken]) /
                tokens[selectedToken]
            ).toPrecision(5)
        );
    };

    useEffect(() => {
        if (!selectedToken || !destinationToken) return;
        if (inAmount) {
            setOutAmount(
                (
                    (Number(inAmount) * tokens[selectedToken]) /
                    tokens[destinationToken]
                ).toPrecision(5)
            );
        } else if (outAmount) {
            setInAmount(
                (
                    (Number(outAmount) * tokens[destinationToken]) /
                    tokens[selectedToken]
                ).toPrecision(5)
            );
        }
    }, [selectedToken, destinationToken]);

    return (
        <>
            <SwapNavbar />
            <Card className="max-w-[1200px] mx-auto mt-4">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="switcheo logo"
                        height={40}
                        radius="sm"
                        src="switcheo.jpg"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Swap</p>
                        <p className="text-small text-default-500">
                            Most efficient way to swap tokens
                        </p>
                    </div>
                </CardHeader>
                <CardBody className="flex-row justify-between gap-4">
                    <Input
                        type="number"
                        label="You pay"
                        min={0}
                        value={inAmount}
                        onChange={handleInputChange}
                    />
                    <SelectToken
                        tokens={tokens}
                        selectedToken={selectedToken}
                        setSelectedToken={setSelectedToken}
                    />
                </CardBody>
                <FaArrowDown className="mx-auto" />
                <CardBody className="flex-row justify-between gap-4">
                    <Input
                        type="number"
                        label="You get"
                        min={0}
                        value={outAmount}
                        onChange={handleOutputChange}
                    />
                    <SelectToken
                        tokens={tokens}
                        selectedToken={destinationToken}
                        setSelectedToken={setDestinationToken}
                    />
                </CardBody>
                {isConnected ? (
                    <Button
                        className="mx-auto my-4"
                        color="primary"
                        onPress={onOpen}
                        isDisabled={!canClick}
                    >
                        Swap
                    </Button>
                ) : (
                    <div className="mx-auto my-4">
                        <ConnectButton />
                    </div>
                )}
            </Card>
            {isOpen && (
                <SwapModal
                    onOpenChange={onOpenChange}
                    swapInfo={{
                        selectedToken,
                        destinationToken,
                        inAmount,
                        outAmount,
                    }}
                />
            )}
        </>
    );
}
