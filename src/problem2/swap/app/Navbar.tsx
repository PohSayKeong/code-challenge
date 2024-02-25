import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Image,
} from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const SwapNavbar = () => {
    return (
        <Navbar maxWidth="full">
            <NavbarBrand className="gap-2">
                <Image
                    alt="switcheo logo"
                    height={40}
                    radius="sm"
                    src="switcheo.jpg"
                    width={40}
                />
                Switcheo
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link aria-current="page">Swap</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ConnectButton />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
