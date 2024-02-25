import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";

export const config = getDefaultConfig({
    appName: "swap",
    projectId: "test",
    chains: [mainnet, polygon, optimism, arbitrum, base, zora],
    ssr: true, // If your dApp uses server side rendering (SSR)
});
